import { qoute } from "../assets/icons";
import { customerReviews } from "../constants";

const CustomerRevier = () => {
  return (
    <div>
      <div className="max-w-[535px] text-center mb-5">
        <h3 className="h3">What clients have to say</h3>
        <p className="font-normal leading-[150%] text-[#333D48] my-4 px-12">
          Join the ranks of satisfied clients who have experienced the impact of
          EchoBot on their business
        </p>
      </div>
      <div className="relative max-w-[706px]">
        {customerReviews.map((value) => (
          <article key={value.name}>
            <p className="max-w-[548px] text-center px-10">{value.review}</p>
            <figure>
              <figcaption>
                <h3 className="h3">{value.name}</h3>
                <p> {value.occupation}</p>
              </figcaption>
              <div className="absolute">
                <img
                  src={value.image}
                  alt={value.name}
                  width={300}
                  height={300}
                />
                <img
                  src={qoute}
                  alt="open qoute"
                  width={100}
                  height={100}
                  className="absolute"
                />
              </div>
            </figure>
          </article>
        ))}
      </div>
    </div>
  );
};

export default CustomerRevier;
