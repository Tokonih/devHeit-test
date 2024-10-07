import "../styles/campaign-card.css";
import cardImge from "../assets/icons/card-img.png";
import save from "../assets/icons/save.png";
import insta from "../assets/icons/insta.svg";
import tiktok from "../assets/icons/tiktok.svg";
import youtube from "../assets/icons/youtube.svg";
import twitter from "../assets/icons/twitter.svg";
import facebok from "../assets/icons/facebok.svg";

export default function CampaignCard({ handleClick, data }) {
  return (
    <div className="campaign-container">
      {data &&
        data.map((c) => (
          <div className="campaign-card-box">
            <div className="card-heading">
              <figure className="card-heading-fig">
                <img src={cardImge} alt="" />
              </figure>
              <div className="w-100">
                <div className="card-description">
                  <p className="m-0">{c.name}</p>
                  <div className="m-0 posted-on">
                    posted 2 days ago{" "}
                    <figure>
                      <img src={save} alt="" />
                    </figure>
                  </div>
                </div>
                <p className="m-0 card-heading-subtiele">
                  Samsung • Product Review
                </p>
              </div>
            </div>
            <p className="card-content">
            {c.description}
            </p>
            <p className="channels">Channels </p>
            <div>
              <div className="card-socials">
                <figure>
                  <img src={insta} alt="" />
                </figure>
                <figure>
                  <img src={tiktok} alt="" />
                </figure>
                <figure>
                  <img src={youtube} alt="" />
                </figure>
                <figure>
                  <img src={twitter} alt="" />
                </figure>
                <figure>
                  <img src={facebok} alt="" />
                </figure>
                <figcaption>+ 2 more</figcaption>
              </div>
            </div>
            <div className="card-budget">
              <div className="card-budget-left">
                <p className="m-0 ">Budget</p>
                <p className="m-0 ">$1000 - $2,000</p>
              </div>
              <button onClick={handleClick}>Apply Now</button>
            </div>
          </div>
        ))}
    </div>
  );
}
