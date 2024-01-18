import { Nav, Button } from "../components";
import { brownRobot } from "../assets/images";
const Hero = () => {
  return (
    <div>
      <Nav />
      <div className="flex items-center gap-2 max-md:flex-col max-md:mt-10">
        <div className="flex flex-col gap-[25px]">
          <h3 className="text-[48px] font-semibold leading-[120%] text-secondary w-[641px]e">
            Elevate Your Conversations with Echobot- Your Personal AI Assistant.
          </h3>
          <p className="text-[20px] leading-[150%] font-normal text-slate-gray w-[587px]e">
            EchoBot is here to make your conversations smarter and more
            enjoyable. Start chatting now and discover the power of AI at your
            fingertips!
          </p>
          <div className="flex gap-[30px] mt-5">
            <Button />
            <Button text={"See  how its works"} color={"bg-secondary"} />
          </div>
        </div>
        <img
          src={brownRobot}
          alt="Brown Robot"
          width={500}
          height={500}
          className="w-[821px] h-[821px] mt-10 mr-5"
        />
      </div>
    </div>
  );
};

export default Hero;
