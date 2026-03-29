"use client";
import { useState } from "react";

const FormNewBoard = () => {
  const [boardName, setBoardName] = useState("");
  const [isLoaading, setIsLoading] = useState(false);

  return (
    <form className=" p-8 rounded-lg space-y-8 bg-secondary-700">
      <p className="text-lg font-bold">Create New Feedback Board</p>
      <fieldset className="fieldset">
        <legend className="fieldset-legend">Board Name</legend>
        <input
          required
          type="text"
          className="input"
          placeholder="Type here"
          value={boardName}
          onChange={(e) => setBoardName(e.target.value)}
        />
      </fieldset>

      <button
        className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"
        type="submit"
      >
        Post
      </button>
    </form>
  );
};

export default FormNewBoard;
