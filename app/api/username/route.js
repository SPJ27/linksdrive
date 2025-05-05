import { createClient } from "@/utils/supabase/server";
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get("username");
  console.log("Username:", searchParams);
  const supabase = await createClient();

  const { data: existing, error: checkError } = await supabase
    .from("usernames")
    .select("*")
    .eq("username", username);

  if (checkError) {
    console.error("Error checking username:", checkError.message);
    return new Response(JSON.stringify({ error: checkError.message }), {
      status: 500,  
    });
  }

  if (existing.length === 0) {
    return new Response(JSON.stringify({ available: true }), {
      status: 200,
    });
  } else {
    return new Response(JSON.stringify({ available: false }), {
      status: 200,
    });
  }
}
export async function POST(request) {
  const { username, email } = await request.json();
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("usernames")
    .insert([{uid: email,  username: username }]);

  if (error) {
    console.error("Error inserting username:", error.message);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
  });
}