import ButtonAccount from "@/components/ButtonAccount";
import ButtonLogout from "@/components/ButtonLogout";
import FormNewBoard from "@/components/FormNewBoard";

export default function Dashboard() {
  return (
    <main className="bg-base-200 min-h-screen p-8">
      {/* HEADER SECTION */}
      <section className="flex justify-between items-center mb-12">
        <h1 className="text-3xl font-extrabold">Private Dashboard</h1>
        <ButtonAccount />
      </section>

      <section>
        <div className="bg-base-100 px5 py3 flex justify-end">
          <ButtonLogout />
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="max-w-5xl mx-auto px3 py12">
        <FormNewBoard />
      </section>
    </main>
  );
}
