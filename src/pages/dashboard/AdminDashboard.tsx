export default function AdminDashboard() {
    return (<>
    <div className="w-full">
      {/* Top Section: Welcome and Stats */}
      <div className="flex flex-col md:flex-row justify-between gap-5 mb-8">
        <div className="flex-1 bg-indigo-900 text-white p-6 rounded-lg shadow-md mb-5 md:mb-0">
          <h1 className="text-2xl font-semibold mb-2">Welcome to the Admin Dashboard</h1>
          <p className="text-sm opacity-80">Monitor your MIS application at a glance.</p>
        </div>
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white border rounded-lg shadow-sm px-4 py-6 flex flex-col items-center">
            <span className="text-3xl font-bold text-indigo-600">1,245</span>
            <span className="text-sm text-gray-500 mt-1">Users</span>
          </div>
          <div className="bg-white border rounded-lg shadow-sm px-4 py-6 flex flex-col items-center">
            <span className="text-3xl font-bold text-green-600">56</span>
            <span className="text-sm text-gray-500 mt-1">Active Projects</span>
          </div>
          <div className="bg-white border rounded-lg shadow-sm px-4 py-6 flex flex-col items-center">
            <span className="text-3xl font-bold text-red-600">7</span>
            <span className="text-sm text-gray-500 mt-1">Pending Tickets</span>
          </div>
        </div>
      </div>
  
      {/* Middle Section: Quick Actions */}
      <div className="mb-8 grid grid-cols-1 sm:grid-cols-3 gap-5">
        <button className="flex items-center justify-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded transition">
          <span className="font-medium">Add User</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </button>
        <button className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded transition">
          <span className="font-medium">Create Project</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </button>
        <button className="flex items-center justify-center gap-3 bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-3 rounded transition">
          <span className="font-medium">View Reports</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-6a3 3 0 016 0v6"/>
          </svg>
        </button>
      </div>
  
      {/* Bottom Section: Recent Activity/Table */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Recent User Activity</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="py-2 px-4 font-medium">User</th>
                <th className="py-2 px-4 font-medium">Action</th>
                <th className="py-2 px-4 font-medium">Date</th>
                <th className="py-2 px-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2 px-4">Alice Johnson</td>
                <td className="py-2 px-4">Created Project</td>
                <td className="py-2 px-4">2024-06-16</td>
                <td className="py-2 px-4">
                  <span className="inline-block px-2 py-1 rounded text-xs bg-green-100 text-green-700">Success</span>
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4">Bob Singh</td>
                <td className="py-2 px-4">Updated Profile</td>
                <td className="py-2 px-4">2024-06-15</td>
                <td className="py-2 px-4">
                  <span className="inline-block px-2 py-1 rounded text-xs bg-blue-100 text-blue-700">Info</span>
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4">Eva Cook</td>
                <td className="py-2 px-4">Failed Login</td>
                <td className="py-2 px-4">2024-06-14</td>
                <td className="py-2 px-4">
                  <span className="inline-block px-2 py-1 rounded text-xs bg-red-100 text-red-700">Error</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>)
  }