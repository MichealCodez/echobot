import { logo } from "../assets/icons";

const Logo = ({ color }) => {
  return (
    <div className="flex gap-1 justify-between items-center">
      <img src={logo} alt="logo icon" width={37} height={37} />
      <p className={`${color} text-2xl font-semibold`}>Echobot</p>
    </div>
  );
};

export default Logo;
