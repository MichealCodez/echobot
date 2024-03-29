import Logo from "./Logo";
import LoginButton from "./LoginButton";
import Button from "./Button";

const Nav = () => {
  return (
    <div className="flex justify-between items-center h-[80px]">
      <div className="flex gap-[37px] items-center">
        <a href="/">
          <Logo color={"text-secondary"} />
        </a>
      </div>
      <div className="flex gap-2 items-center font-bold max-sm:hidden">
        <LoginButton />
        <Button
          width={"w-[129px]"}
          height={"h-[39px]"}
          radius={"rounded-[8px]"}
          textSize={"text-[16px]"}
        />
      </div>
    </div>
  );
};

export default Nav;
