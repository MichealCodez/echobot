import { powerOfEchobot } from "../constants";
import { Button } from "../components";
const PowerOfEchobot = () => {
  return (
    <div className="flex flex-col items-center gap-[88px]">
      <div className="flex flex-col items-center gap-[12px] text-center">
        <h3 className="text-[40px] font-semibold leading-[120%] text-secondary">
          Three Ways to Harness the Power of EchoBot
        </h3>
        <p className="text-[20px] font-normal leading-[150%] text-secondary max-w-[851px] mb-5">
          Unlock a new level of intelligent interactions with our powerful
          chatbot solutions. Stay connected seamlessly through:
        </p>
      </div>
      <div className="flex flex-col gap-[76px]">
        {powerOfEchobot.map((value, index) => (
          <div className="flex md:odd:flex-row-reverse max-md:flex-col gap-[60px] items-center">
            <div className="flex flex-col gap-[38px] max-w-[569px]">
              <div className="flex flex-col w-full gap-[16px]">
                <h3 className="text-[40px] text-secondary font-semibold leading-[120%]">
                  {value.title}
                </h3>
                <p className="text-[20px] font-normal leading-[150%] text-secondary">
                  {value.description}
                </p>
              </div>
              <Button text={"Try it now"} />
            </div>
            <img
              src={value.image}
              alt={value.title}
              width={300}
              height={300}
              className="w-[508px] h-[501px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PowerOfEchobot;
