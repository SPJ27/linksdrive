"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const SignOutBtn = ({ image }) => {
  const [dropdown, setDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative items-center justify-center" ref={dropdownRef}>
      <button
        id="dropdownDefaultButton"
        className="focus:outline-none"
        type="button"
        onClick={() => setDropdown((prev) => !prev)}
        aria-expanded={dropdown}
        aria-haspopup="true"
      >
        <Image
          src={image}
          className="rounded-full"
          width={28}
          height={28}
          alt="User Avatar"
        />
      </button>

      {dropdown && (
        <div
          id="dropdown"
          className="z-10 absolute right-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow-md w-44 dark:bg-gray-800"
        >
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Landing Page
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Settings
              </a>
            </li>
            <li>
              <button
                onClick={() => signOut()}
                className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 text-red-500"
              >
                Sign out
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SignOutBtn;