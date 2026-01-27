export default function Home() {
  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">SaaS Billing Dashboard</h1>
      <p className="text-gray-300 mb-6">
        Build your subscription management app, track invoices, and manage users.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-black rounded shadow">
          <h2 className="font-semibold">Total Revenue</h2>
          <p className="text-xl mt-2">$0.00</p>
        </div>
        <div className="p-4 bg-black rounded shadow">
          <h2 className="font-semibold">Active Subscriptions</h2>
          <p className="text-xl mt-2">0</p>
        </div>
      </div>
    </main>
  );
}

