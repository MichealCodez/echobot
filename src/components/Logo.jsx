import { logo } from "../assets/icons";

const Logo = ({ color }) => {
  return (
    <div className="flex gap-1 justify-between items-center w-20">
      <img src={logo} alt="logo icon" width={37} height={37} />
      <p className={`${color} text-2xl`}>Echobot</p>
    </div>
  );
};

export default Logo;
