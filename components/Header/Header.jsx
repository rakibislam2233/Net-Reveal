"use client";
import { usePathname } from "next/navigation";
import Logo from "./logo";
import Navlink from "./Navlink";
const Header = () => {
  const pathName = usePathname();
  return (
    <nav
      className={`w-full ${
        pathName === "/" && "md:fixed bg-opacity-30 "
      }  z-10 bg-gray-900 bg-opacity-90 px-3 py-5 text-whie`}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <Logo />
        <Navlink />
      </div>
    </nav>
  );
};

export default Header;
