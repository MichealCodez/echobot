import { Nav, Button } from "../components";
import { brownRobot } from "../assets/images";
const Hero = () => {
  return (
    <div>
      <Nav />
      <div className="flex items-center justify-between">
        <div>
          <h3>
            Elevate Your Conversations with Echobot- Your Personal AI Assistant.
          </h3>
          <p>
            EchoBot is here to make your conversations smarter and more
            enjoyable. Start chatting now and discover the power of AI at your
            fingertips!
          </p>
          <div className="flex gap-[30px]">
            <Button />
            <Button text={"See  how its works"} color={"bg-secondary"} />
          </div>
        </div>
        <img src={brownRobot} alt="Brown Robot" width={500} height={500} />
      </div>
    </div>
  );
};

export default Hero;
