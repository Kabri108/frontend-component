
import { FaHome, FaUser, FaCog, FaBars } from 'react-icons/fa';

const iconMap = {
  FaHome: <FaHome className="text-xl" />,
  FaUser: <FaUser className="text-xl" />,
  FaCog: <FaCog className="text-xl" />,
};

const Sidebar = ({ isOpen, toggleSidebar, links }) => {
  return (
    <div className={`bg-gray-800 text-white h-screen p-5 pt-8 duration-300 ${isOpen ? "w-64" : "w-20"}`}>
      <div className="flex justify-between">
        <h1 className={`font-bold text-xl ${!isOpen && "hidden"}`}>Admin Panel</h1>
        <FaBars className="cursor-pointer text-2xl" onClick={toggleSidebar} />
      </div>

      {/* Sidebar Links */}
      <ul className="mt-10 text-white">
        {links.map(link => (
          <li key={link.id} className="flex items-center gap-x-4 p-2 hover:bg-gray-600 rounded-md cursor-pointer">
            {iconMap[link.icon]} {/* Dynamic Icon */}
            <span className={`${!isOpen && "hidden"} text-base font-medium`}>{link.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
