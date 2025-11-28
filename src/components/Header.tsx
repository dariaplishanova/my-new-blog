import { Link, NavLink } from "react-router-dom";
import { Paperclip, Home } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full">
   <nav className="h-14 w-full border-b border-slate-200 flex justify-between items-center px-7 mb-10 mt-6 text-white">

  <Link to="/home" className="text-slate-500 font-extrabold text-2xl transition-all duration-300 hover:text-yellow-500 ">
    Blog
  </Link>

  <ul className="flex gap-6 md:gap-10">
    <li>
      <NavLink
        to="/home"
        className="flex items-center text-slate-500 gap-2 hover:text-yellow-500 hover:scale-105"
      >
        <Home size={18} />
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/articles"
        className="flex items-center text-slate-500 gap-2 hover:text-yellow-500 hover:scale-105"
      >
        <Paperclip size={18} />
        Articles
      </NavLink>
    </li>
    <li>
    </li>
  </ul>
</nav>
    </header>

  );
};

export default Header;
