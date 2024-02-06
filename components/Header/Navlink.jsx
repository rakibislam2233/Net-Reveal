import React from "react";
import SearchQuery from "./SearchQuery";
import { BsPersonCircle } from "react-icons/bs";
import { NavData } from "./NavData";
import ActiveLink from "./ActiveLink";

const Navlink = () => {
  return (
    <ul className="flex justify-center items-center gap-5">
        {
            NavData?.map((nav,i)=><li key={i+1}><ActiveLink title={nav.title} path={nav.path}/></li>)
        }
      <SearchQuery />
      <li>
        <BsPersonCircle className="w-7 h-7" />
      </li>
      <button className="px-5 py-2 bg-teal-500 rounded-xl">Subscribe</button>
    </ul>
  );
};

export default Navlink;
