import Image from "next/image";
import play from '@/assets/logo/play.png';
import Link from "next/link";
const Logo = () => {
  return ( 
    <Link href={'/'}>
      <h1 className="text-2xl font-semibold flex justify-center items-center gap-1">
        <Image width={25} height={25} src={play} alt="play" /> Net
        <span>Reveal</span>
      </h1>
    </Link>
  );
};

export default Logo;
