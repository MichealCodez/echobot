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
        <a
          href="#try-it"
          className=" text-[16px] font-semibold text-secondary hover:scale-[1.1]"
        >
          How It Works
        </a>
      </div>
      <div className="flex gap-2 items-center font-bold max-sm:hidden">
        <LoginButton />
        <Button
          color={"bg-grad"}
          text={"Start Chat"}
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
