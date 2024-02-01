import { qoute } from "../assets/icons";
import { customerReviews } from "../constants";

const CustomerRevier = () => {
  return (
    <div>
      <div>
        <h3 className="h3">What clients have to say</h3>
        <p className="font-normal leading-[150%] text-[#333D48]">
          Join the ranks of satisfied clients who have experienced the impact of
          EchoBot on their business
        </p>
      </div>
      <div className="relative">
        {customerReviews.map((value) => (
          <article key={value.name}>
            <p>{value.review}</p>
            <figure>
              <figcaption>
                <h3>{value.name}</h3>
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
