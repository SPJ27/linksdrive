import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import {
  LayoutDashboard,
  LogOut,
  ChevronDown,
  User,
  SquareArrowOutUpRight,
} from "lucide-react";

const Navbar = async () => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const signOut = async () => {
    "use server";
    const supabase = await  createClient();
    await supabase.auth.signOut();
    return redirect("/login");
  };

  return (
    <div className="shadow-sm h-16 w-full px-6 sm:px-12 lg:px-24 items-center flex bg-white">
      <div>
        <Link
          href="/dash"
          className="flex items-center font-medium py-2 rounded px-5 text-white bg-[#191919] hover:bg-[#333333] transition-colors"
        >
          <SquareArrowOutUpRight className="mr-2 h-4 w-4" />
          Preview Page
        </Link>
      </div>

      <div className="flex flex-grow justify-end items-center">
        <div className="relative group">
          <button className="flex items-center space-x-2 px-4 py-2 rounded-md hover:bg-gray-100 transition-colors">
            {user.email && (
              <span className="hidden sm:inline-block truncate max-w-[160px]">
                {user.email}
              </span>
            )}
            <ChevronDown className="h-4 w-4" />
          </button>

          <div className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
            <div className="py-1">
              <Link
                href="/dashboard"
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <LayoutDashboard className="mr-2 h-4 w-4" />
                Dashboard
              </Link>
              <Link
                href="/profile"
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <User className="mr-2 h-4 w-4" />
                Profile
              </Link>
                <button
                onClick={signOut}
                  type="submit"
                  className="flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
