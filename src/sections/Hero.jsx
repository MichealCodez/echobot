import { Nav, Button } from "../components";
import { brownRobot } from "../assets/images";
const Hero = () => {
  return (
    <div>
      <Nav />
      <div className="flex items-center justify-between max-md:flex-col max-md:mt-10">
        <div className="flex flex-col gap-[25px] mt-[-6%]">
          <h3 className="text-[48px] font-semibold leading-[120%] text-secondary max-w-[641px]">
            Elevate Your Conversations with Echobot- Your Personal AI Assistant.
          </h3>
          <p className="text-[20px] leading-[150%] font-normal text-slate-gray max-w-[587px]">
            EchoBot is here to make your conversations smarter and more
            enjoyable. Start chatting now and discover the power of AI at your
            fingertips!
          </p>
          <div className="flex gap-[30px] mt-2 max-md:flex-col">
            <Button text="Get started for free" />
            <Button text={"See  how its works"} color={"bg-secondary"} />
          </div>
        </div>
        <img
          src={brownRobot}
          alt="Brown Robot"
          width={500}
          height={500}
          className="max-w-[821px] h-[821px] mr-2 max-md:w-[350px] max-md:h-[600px] max-md:mt-5"
        />
      </div>
    </div>
  );
};

export default Hero;
