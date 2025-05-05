"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

export async function login(formData) {
  const supabase = await createClient();

  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const { error } = await supabase.auth.signInWithPassword(data);
  console.log("Error:", error);
  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/dashboard");
}

export async function signup(formData) {
  const email = formData.get("email");
  const password = formData.get("password");
  const username = formData.get("username");
  console.log("Username:", username);
  const supabase = await createClient();
  const { data: signupData, error: signupError } = await supabase.auth.signUp({
    email,
    password,
  });

  if (signupError) {
    console.error("Error signing up:", signupError.message);
    redirect("/error");
  }
   fetch("http://localhost:3000/api/username", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      email: email,
  }),
  })
    
  revalidatePath("/", "layout");
  redirect("/emailsent");
}
