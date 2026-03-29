"use client";

import { createClient } from "@/libs/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ButtonLogout = () => {
  const supabase = createClient();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = async () => {
    setIsLoading(true);

    try {
      // 1. Sign out from Supabase
      await supabase.auth.signOut();

      // 2. Refresh the page or redirect to home to clear the cache
      router.push("/");
      router.refresh();
    } catch (error) {
      console.error("Error logging out:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      className={`btn btn-ghost text-error ${isLoading ? "loading" : ""}`}
      onClick={handleLogout}
      disabled={isLoading}
    >
      {isLoading ? (
        ""
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
          />
        </svg>
      )}
      Logout
    </button>
  );
};

export default ButtonLogout;
