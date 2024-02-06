import Link from "next/link";
const SectionTitle = ({title,path}) => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-3xl font-bold">{title}</h1>
      <Link href={path}>
        <button className="px-8 py-2 bg-teal-500 rounded-xl border border-teal-500 transition-all duration-300 hover:bg-transparent hover:border-white ">
          View All
        </button>
      </Link>
    </div>
  );
};

export default SectionTitle;
