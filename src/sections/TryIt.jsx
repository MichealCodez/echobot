import { whiteRobot } from "../assets/images";
import { tryMessages } from "../constants";
import { send } from "../assets/icons";
const TryIt = () => {
  return (
    <div className="flex items-center max-md:flex-col">
      <div className="flex flex-col gap-[40px]">
        <div className="flex flex-col gap-[11px]">
          <h3 className="text-[40px] text-white font-semibold leading-[120%]">
            Give it a try
          </h3>
          <p className="text-[20px] font-normal leading-[150%] text-[#F5F5F5]">
            Ready to experience the future of intelligent conversations? Giving
            EchoBot a try is just a click away. Here's what awaits you:
          </p>
        </div>
        <div className="flex flex-col justify-between bg-white w-[685px] h-[474px] rounded-[19.5px] pt-[32px]">
          <div className="px-8">
            {tryMessages.map((value) => (
              <div
                key={value.message}
                className={`${
                  value.user === "echobot" ? "bg-[#F5F5F5]" : "bg-white"
                } text-[18px] font-normal leading-[150%] pl-5 py-4 pr-20 rounded-[6.5px]`}
              >
                {value.message}
              </div>
            ))}
          </div>
          <div className="w-full bg-[#F5F5F5] max-h-[93.3px] rounded-b-[19.5px] px-8 pt-[15px] pb-[29px] flex">
            <form className="w-full border-solid border-[0.811px] border-[#B0B4B8] rounded-[6.5px] flex items-center justify-between h-[49px] px-5">
              <input
                type="text"
                name="message"
                placeholder="Ask me anything ...."
                className="bg-[#F5F5F5] w-full overflow-hidden resize-none outline-none"
              />
              <button type="submit">
                <img src={send} alt="Send Icon" width={32} height={32} />
              </button>
            </form>
          </div>
        </div>
      </div>
      <img
        src={whiteRobot}
        alt="White Robot"
        width={300}
        height={300}
        className="w-[590px] h-[631px] self-end"
      />
    </div>
  );
};

export default TryIt;
