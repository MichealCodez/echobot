import { logo } from "../assets/icons";

const Logo = ({ color }) => {
  return (
    <div className="flex gap-1 justify-between items-center">
      <img src={logo} alt="logo icon" className="w-[37px] h-[36]" />
      <p className={`${color} text-[24px] font-semibold`}>Echobot</p>
    </div>
  );
};

export default Logo;
