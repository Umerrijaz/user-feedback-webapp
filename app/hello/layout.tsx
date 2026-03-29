export default function HelloLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div data-theme="business" className="min-h-screen bg-base-200">
      <div className="navbar bg-base-100 shadow-md mb-8">
        <div className="flex-1">
          <a href="/" className="btn btn-ghost text-xl">
            My MicroSaaS
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="/">Home</a>
            </li>
          </ul>
        </div>
      </div>
      <main className="container mx-auto px-4">{children}</main>
    </div>
  );
}
