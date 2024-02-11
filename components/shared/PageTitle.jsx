"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const PageTitle = ({ title }) => {
  const path = usePathname();
  return (
    <div className="space-y-1">
      <h1 className="text-5xl font-semibold text-center">{title}</h1>
      <h1 className="font-semibold text-center">
        <Link href={"/"}>Home</Link>{path}
      </h1>
    </div>
  );
};

export default PageTitle;
