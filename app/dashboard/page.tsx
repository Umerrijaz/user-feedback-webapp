"use client";

import { useState } from "react";
import apiClient from "@/libs/api";

const UserProfile = () => {
  const [isLoading, setIsLoading] = useState(false);

  const saveUser = async () => {
    setIsLoading(true);
    try {
      // CHANGED: Sending "name" to match your profiles table columns
      const { data } = await apiClient.post("/user", {
        name: "Umer Riaz",
      });
      console.log(data);
      alert("Success! Check your Supabase dashboard.");
    } catch (e) {
      console.error(e?.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-8">
      <button className="btn btn-primary" onClick={() => saveUser()}>
        {isLoading && (
          <span className="loading loading-spinner loading-sm"></span>
        )}
        Save My Name
      </button>
    </div>
  );
};

export default UserProfile;
