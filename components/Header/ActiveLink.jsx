'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

const ActiveLink = ({ title, path }) => {
  const pathName = usePathname();
  const isActive = path === pathName;
  return (
    <Link
      href={path}
      className={`${isActive && "text-teal-500"} hover:text-teal-500`}
    >
      {title}
    </Link>
  );
};

export default ActiveLink;
