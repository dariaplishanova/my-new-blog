import { Link, NavLink } from "react-router";
import { Paperclip, Home, User } from "lucide-react";

const Header = () => {
  return (
   <nav className="h-14 w-full bg-stone-800 rounded-3xl shadow-md flex justify-between items-center px-7 mb-10 mt-6 text-white">

  <Link to="/home" className="text-white font-extrabold text-2xl transition-all duration-300 hover:text-yellow-500 ">
    Blog
  </Link>

  <ul className="flex gap-6 md:gap-10">
    <li>
      <NavLink
        to="/home"
        className="flex items-center gap-2 transition-all duration-300 hover:text-yellow-500 hover:scale-105"
      >
        <Home size={18} />
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/articles"
        className="flex items-center gap-2 transition-all duration-300 hover:text-yellow-500 hover:scale-105"
      >
        <Paperclip size={18} />
        Articles
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/"
        className="flex items-center gap-2 transition-all duration-300 hover:text-yellow-500 hover:scale-105"
      >
        <User size={18} />
        Connection
      </NavLink>
    </li>
  </ul>
</nav>

  );
};

export default Header;
