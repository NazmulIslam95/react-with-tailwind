import { useState } from "react";
import Link from "./Link";
import { HiOutlineMenuAlt1 } from "react-icons/Hi";
import { AiOutlineCloseCircle } from "react-icons/Ai";
const NavBar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "*", name: "NotFound" },
  ];

  return (
    <nav className="text-black p-6 ">
      <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
        {open === true ? <AiOutlineCloseCircle /> : <HiOutlineMenuAlt1 />}
      </div>
      <ul className={`md:flex rounded-2xl duration-1000 absolute md:static ${open ? 'top-16': '-top-60' } p-6  `}>
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
