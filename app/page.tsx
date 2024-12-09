export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Welcome to Bookshop Management</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
            <h3 className="font-medium mb-2">Inventory Overview</h3>
            <p className="text-gray-600">Check current stock levels and manage inventory</p>
          </div>
          <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
            <h3 className="font-medium mb-2">Today&apos;s Sales</h3>
            <p className="text-gray-600">View and manage today&apos;s transactions</p>
          </div>
          <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
            <h3 className="font-medium mb-2">Recent Orders</h3>
            <p className="text-gray-600">Track and process customer orders</p>
          </div>
          <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
            <h3 className="font-medium mb-2">Employee Schedule</h3>
            <p className="text-gray-600">View and manage staff schedules</p>
          </div>
        </div>
      </div>
    </div>
  );
}
