import React from "react";
import "./index.scss";

const Sponsor = () => {
  const sponsors = [
    {
      logo: "",
      para: "StockPe, India's pioneering virtual platform, revolutionizes trading education by gamifying the experience of practicing in the stock market without real-world financial risks. The app offers a realistic and immersive environment for honing trading skills, making it the first of its kind in the country.",
    },
  ];
  return (
    <div className="f101SponsorSection">
      <div>
        <h2 className="sectionTitle">OUR FEATURED SPONSOR</h2>
        <p className="sectionPara">
          It was popularized in the 1960s with the release of Letraset sheets
          containing desklike Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
      <div className="sectionSponsors">
        {sponsors.map((sponsor) => {
          return (
            <div>
              <div className="sponsorLogo">
                <img src={sponsor.logo} alt="sponsor" />
              </div>
              <p>{sponsor.para}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sponsor;
