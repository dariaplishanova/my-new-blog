import { NavLink } from "react-router";
import { Paperclip, Home, User } from "lucide-react";

const Header = () => {
  return (
    <nav className="h-14 w-full bg-gray-300 rounded-4xl shadow-md flex justify-between items-center px-7 mb-10 mt-6 text-neutral-600">
      <NavLink to="/" className="text-black font-bold text-2xl ">
        Blog
      </NavLink>
      <ul className="flex gap-6">
        <li>
          <NavLink to="/" className="flex items-center gap-2">
            <Home size={18} />
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/articles" className="flex items-center gap-2">
            <Paperclip size={18} />
            Articles
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className="flex items-center gap-2">
            <User size={18} />
            Connection
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
