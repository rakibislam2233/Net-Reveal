import Image from "next/image";
import play from '@/assets/logo/play.png';
const Logo = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold flex justify-center items-center gap-1">
        <Image width={25} height={25} src={play} alt="play" /> Net
        <span>Reveal</span>
      </h1>
    </div>
  );
};

export default Logo;
