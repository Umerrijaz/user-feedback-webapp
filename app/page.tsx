import UserCard from "@/components/UserCard";

export default function Home() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Dashboard</h1>
      <hr />

      {/* Rendering multiple instances of your component */}
      <div style={{ display: "flex", gap: "20px" }}>
        <UserCard />
      </div>
    </main>
  );
}
