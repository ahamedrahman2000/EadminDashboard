export default function Header() {
  return (
    <header className="bg-gray-900 text-white h-14 flex items-center">
      <div className="w-full flex items-center justify-between px-6">
         
        <div className="flex items-center gap-4">
          <button className="text-xl hover:text-gray-300">
            <i className="fa-solid fa-bars"></i>
          </button>

          <div className="relative hidden md:block">
            <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm"></i>
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-800 text-sm pl-9 pr-3 py-1.5 rounded-md 
              outline-none focus:ring-1 focus:ring-red-500"
            />
          </div>
        </div>
 
        <div className="flex items-center gap-6">
          <button className="relative text-lg hover:text-gray-300">
            <i className="fa-regular fa-bell"></i>
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          <div className="flex items-center gap-2 cursor-pointer hover:text-gray-300">
            <i className="fa-solid fa-user-circle text-xl"></i>
            <span className="hidden md:block text-sm">Admin</span>
          </div>
        </div>

      </div>
    </header>
  );
}
