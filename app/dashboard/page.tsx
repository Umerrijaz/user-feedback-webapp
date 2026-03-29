import ButtonAccount from "@/components/ButtonAccount";
import FormNewBoard from "@/components/FormNewBoard";

export default function Dashboard() {
  return (
    <main data-theme="synthwave" className="bg-base-200 min-h-screen p-8">
      {/* HEADER SECTION */}
      <section className="flex justify-between items-center mb-12">
        <h1 className="text-3xl font-extrabold">Private Dashboard</h1>
        <ButtonAccount />
      </section>

      {/* CONTENT SECTION */}
      <section className="max-w-5xl mx-auto px3 py12">
        <FormNewBoard />
      </section>
    </main>
  );
}
