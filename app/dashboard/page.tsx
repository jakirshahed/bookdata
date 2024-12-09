export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-gray-500 text-sm font-medium mb-2">Today's Sales</h3>
          <div className="flex items-baseline">
            <span className="text-2xl font-semibold">$2,854</span>
            <span className="text-green-600 text-sm ml-2">+12%</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-gray-500 text-sm font-medium mb-2">Active Orders</h3>
          <div className="flex items-baseline">
            <span className="text-2xl font-semibold">24</span>
            <span className="text-gray-600 text-sm ml-2">orders</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-gray-500 text-sm font-medium mb-2">Low Stock Items</h3>
          <div className="flex items-baseline">
            <span className="text-2xl font-semibold">12</span>
            <span className="text-red-600 text-sm ml-2">items</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-gray-500 text-sm font-medium mb-2">Total Customers</h3>
          <div className="flex items-baseline">
            <span className="text-2xl font-semibold">1,429</span>
            <span className="text-green-600 text-sm ml-2">+5</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((order) => (
              <div key={order} className="flex items-center justify-between border-b pb-4">
                <div>
                  <p className="font-medium">Order #{order}234</p>
                  <p className="text-sm text-gray-600">2 items • Processing</p>
                </div>
                <span className="text-blue-600 font-medium">$124.00</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Top Selling Books</h2>
          <div className="space-y-4">
            {[
              { title: "The Great Gatsby", sales: 45 },
              { title: "To Kill a Mockingbird", sales: 38 },
              { title: "1984", sales: 32 }
            ].map((book, index) => (
              <div key={index} className="flex items-center justify-between border-b pb-4">
                <div>
                  <p className="font-medium">{book.title}</p>
                  <p className="text-sm text-gray-600">Fiction</p>
                </div>
                <span className="text-gray-600 font-medium">{book.sales} sold</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
