import { qoute } from "../assets/icons";
import { customerReviews } from "../constants";

const CustomerRevier = () => {
  return (
    <div className="flex flex-col items-center text-center max-w-[706px] relative">
      <div className="max-w-[535px] mb-1">
        <h3 className="h3">What clients have to say</h3>
        <p className="font-normal leading-[150%] text-[#333D48] my-4 px-12">
          Join the ranks of satisfied clients who have experienced the impact of
          EchoBot on their business
        </p>
      </div>

      {customerReviews.map((value) => (
        <article
          key={value.name}
          className="relative flex flex-col items-center text-center bg-white rounded-2xl px-8 pt-8 pb-16 z-10 shadow-lg"
        >
          <p className="max-w-[548px] px-10">{value.review}</p>
          <figure>
            <figcaption className=" my-6">
              <h3 className="h3 text-[18px]">{value.name}</h3>
              <p className="text-[16px]"> {value.occupation}</p>
            </figcaption>
            <div className="absolute flex flex-col items-center max-w-[150px] bg-white rounded-full p-6">
              <img
                src={value.image}
                alt={value.name}
                width={300}
                height={300}
                className="border-4 border-[#FF0F7B] rounded-full"
              />
              <img
                src={qoute}
                alt="open qoute"
                width={100}
                height={100}
                className="absolute w-[42px] top-[70%]"
              />
            </div>
          </figure>
        </article>
      ))}
      <div className="bg-white z-0 w-[550px] h-10 max-w-[600px] absolute top-[94%] rounded-2xl"></div>
    </div>
  );
};

export default CustomerRevier;
