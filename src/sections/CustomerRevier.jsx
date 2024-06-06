import { qoute } from "../assets/icons";
import { customerReviews } from "../constants";
import { useState } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const CustomerRevier = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="flex flex-col items-center text-center max-w-[706px] relative">
      <div className="max-w-[535px] mb-1">
        <h3 className="h3">What clients have to say</h3>
        <p className="font-normal leading-[150%] text-[#333D48] my-4 px-12 max-md:px-1">
          Join the ranks of satisfied clients who have experienced the impact of
          EchoBot on their business
        </p>
      </div>
      <Carousel responsive={responsive} showDots={true} infinite={true} className="w-[100%]">
        {customerReviews.map((value, ind) => (
          <div className="pb-36 w-[100%]">
            <article key={ind} className="relative flex flex-col items-center text-center bg-white rounded-2xl px-8 pt-8 pb-16 z-10 shadow-lg">
              <p className="max-w-[548px] px-10 max-md:px-1 mt-4">
                {value.review}
              </p>
              <figure className="flex flex-col items-center">
                <figcaption className="mt-6">
                  <h3 className="h3 text-[18px]">{value.name}</h3>
                  <p className="text-[16px]"> {value.occupation}</p>
                </figcaption>
                <div className="absolute flex flex-col items-center max-w-[150px] bg-white rounded-full p-6 top-[77%] max-sm:top-[82%]">
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
            <div className="bg-white w-[90%] h-10 mt-[-4%] rounded-2xl m-auto"></div>
          </div>
        ))}
      </Carousel>
      {/* <div className="bg-white w-[90%] h-10 mt-[-4%] rounded-2xl"></div> */}
      {/* <div className="flex justify-center mt-24 space-x-3">
        {customerReviews.map((value, ind) => (
          <div
            key={value.name}
            onClick={() => setIndex(ind)}
            className={`w-[24px] h-[24px] bg-white rounded-full hover:scale-[1.2] ${
              index === ind && "bg-[#FF0F7B] scale-[1.3]"
            }`}
          ></div>
        ))}
      </div> */}
    </div>
  );
};

export default CustomerRevier;
