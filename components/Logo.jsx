import Image from "next/image";
const Logo = () => {
  return (
    <div>
      <Image src="/logo.png" alt="Logo" width={150} height={100} />
    </div>
  );
};
export default Logo;
