"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import apiClient from "@/libs/api";

export default function FormNewBoard() {
  const [boardName, setBoardName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const data = await apiClient.post("/boards", {
        name: boardName,
      });

      console.log("Board created:", data);
      setBoardName("");
      router.refresh(); // ← automatically refreshes the board list
    } catch (error) {
      console.error("Error creating board:", error);
      alert("Failed to create board. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        required
        type="text"
        className="px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
        placeholder="Enter board name"
        value={boardName}
        onChange={(e) => setBoardName(e.target.value)}
        disabled={isSubmitting}
      />
      <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
        {isSubmitting ? (
          <span className="loading loading-spinner loading-sm"></span>
        ) : (
          "Create Board"
        )}
      </button>
    </form>
  );
}
