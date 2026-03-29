"use client"; // 1. Tell Next.js this is an interactive component

import { useState } from "react"; // 2. Import the hook

export default function Home() {
  // 3. Create state: [currentValue, functionToUpdateIt] = useState(initialValue)
  const [count, setCount] = useState("Guest");

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-base-200 p-4">
      {/* I added 'text-center' here so everything stays aligned */}
      <div>
        {/* 4. Use the state variable inside your HTML */}
        <h1 className="text-5xl font-bold text-primary mb-4">
          Welcome, {count}!
        </h1>

        <p>The state is currently {count}.</p>

        {/* 5. Update the state when the button is clicked */}
        <button onClick={() => setCount("Admin")}>Click Me!</button>
      </div>
    </main>
  );
}
