import { Button } from "../components";
import { language } from "../assets/images";
import { multiLang, details } from "../constants";
import { tickCircle } from "../assets/icons";

const StayConnected = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center gap-[12px] text-center">
        <h3 className="text-[40px] font-semibold leading-[120%] text-secondary">
          Our powerful chatbot solutions, Stay connected
        </h3>
        <p className="text-[20px] font-normal leading-[150%] text-secondary max-w-[851px] mb-5">
          Unlock a new level of intelligent interactions with our powerful
          chatbot solutions. Stay connected seamlessly through:
        </p>
        <Button />
      </div>
      <div className="flex gap-[63px] mt-[81px] max-md:flex-col">
        <div className="flex flex-col gap-[24px]">
          {details.map((value) => (
            <div
              key={value.title}
              className="flex flex-col border-solid border-b border-[#E6E8EC] max-w-[463px] min-h-[191px] p-[16px] items-start gap-[10px] first:rounded-[8px] first:bg-[#F5F5F5] first:border-none"
            >
              <h6 className="text-[20px] font-bold leading-[150%] text-secondary">
                {value.title}
              </h6>
              <p className="text-secondary text-[20px] font-normal leading-[150%]">
                {value.description}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-[38px] max-w-[615px] max-h[622px] rounded-[24px] border border-[#FF0F7B] pt-[52px] px-[33px] pb-[72px]">
          <div className="inline-flex items-center gap-[29px]">
            <img
              src={language}
              alt="Multi language Image"
              width={30}
              height={30}
              className="w-[110px] h-[110px]"
            />
            <h6 className="text-[20px] font-bold leading-[150%] text-secondary">
              Multi-Language Support
            </h6>
          </div>
          <p className="max-w-[550px] text-[20px] font-normal leading-[150%] text-secondary">
            Break language barriers with our chatbot's multi-language support.
            Engage with a global audience by providing conversations in their
            preferred language, enhancing accessibility and inclusivity.
          </p>
          <div className="ul-img flex flex-col gap-[26px] justify-center">
            {multiLang.map((value) => (
              <div key={value} className="flex gap-[17px] items-center">
                <img
                  src={tickCircle}
                  alt="Tick Circle"
                  className="max-w-[24px] max-h-[24px]"
                />
                <p className="text-[20px] font-normal leading-[150%] text-secondary">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StayConnected;
