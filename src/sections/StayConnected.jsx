import { Button } from "../components";
import { language } from "../assets/images";
import { multiLang } from "../constants";
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
      <div>
        <div>
          <div>
            <h6>Website</h6>
            <p>
              Enhance user engagement on your website with our chatbot. From
              answering queries to guiding users, our chatbot ensures a
              personalized and interactive web experience.
            </p>
          </div>
          <div>
            <h6>Live Chat(B2B)</h6>
            <p>
              Empower your customer support with our chatbot integrated into
              live chat systems. Instant responses, smart issue resolution – all
              at your fingertips for unparalleled customer satisfaction.
            </p>
          </div>
          <div>
            <h6>Messenger</h6>
            <p>
              Extend your reach on messaging platforms with our chatbot
              solutions. From Facebook Messenger to other messaging apps,
              connect with your audience wherever they are.
            </p>
          </div>
        </div>
        <div>
          <div>
            <img
              src={language}
              alt="Multi language Image"
              width={30}
              height={30}
            />
            <h6>Multi-Language Support</h6>
          </div>
          <p>
            Break language barriers with our chatbot's multi-language support.
            Engage with a global audience by providing conversations in their
            preferred language, enhancing accessibility and inclusivity.
          </p>
          <ul className="ul-img flex flex-col gap-[26px]">
            {multiLang.map((value) => (
              <li key={value}>{value}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StayConnected;
