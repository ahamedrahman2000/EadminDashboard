export default function Header() {
  return (
    <header className="bg-gray-800 sticky top-0 text-white h-14 flex items-center">
      <div className="w-full flex items-center justify-between px-6">
        <div className="flex items-center gap-4"></div>

        <div className="flex items-center gap-6">
          <div className="relative group">
            <button className="relative text-lg hover:text-gray-300">
              <i className="fa-regular fa-bell"></i>
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            <div
              className="absolute right-0 mt-3 w-64 bg-white text-gray-800 rounded shadow-lg opacity-0 invisible 
              group-hover:opacity-100 group-hover:visible transition-all"
            >
              <div className="p-3 border-b font-semibold">Notifications</div>

              <ul className="text-sm">
                <li className="px-4 py-2 hover:bg-gray-100">
                  New order placed
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  Product stock low
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  Payment received
                </li>
              </ul>

              <div className="p-2 text-center text-blue-600 text-sm hover:bg-gray-100 cursor-pointer">
                View all
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="flex items-center gap-2 cursor-pointer hover:text-gray-300">
              <i className="fa-solid fa-user-circle text-xl"></i>
              <span className="hidden md:block text-sm">Admin</span>
            </div>

            <div
              className="absolute right-0 mt-3 w-40 bg-white text-gray-800 rounded shadow-lg opacity-0 invisible 
              group-hover:opacity-100 group-hover:visible transition-all"
            >
              <ul className="text-sm">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Profile
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Settings
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-600">
                  Logout
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
