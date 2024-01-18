import Logo from "./Logo";
import LoginButton from "./LoginButton";
import Button from "./Button";

const Nav = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-8 items-center">
        <a href="/">
          <Logo color={"text-secondary"} />
        </a>
        <a href="#try-it" className=" text-lg font-semibold text-secondary">
          How It Works
        </a>
      </div>
      <div className="flex gap-2 items-center font-bold max-sm:hidden">
        <LoginButton />
        <Button color={"bg-grad"} text={"Start Chat"} />
      </div>
    </div>
  );
};

export default Nav;
