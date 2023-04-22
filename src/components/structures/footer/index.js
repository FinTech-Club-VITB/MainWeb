import React from "react";
import Socials from "../../common/socials";
import "./index.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footerSection">
      <div className="footerTopSection">
        <div>
          <h3>Contact US</h3>
          <p>
            +91 72258 32190
            <br />
            fintechclub@vitbhopal.ac.in
            <br />
            VIT Bhoapl University
          </p>
        </div>
        <div>
          <h3>Events</h3>
          <Link to="/events/beyond-the-blocks">
            <p className="link">Beyond The Blocks</p>
          </Link>
          <Link to="/events/auction-arena">
            <p className="link">AUCTION ARENA</p>
          </Link>
          <Link to="/events/finance101">
            <p className="link">FINANCE 101</p>
          </Link>
          <Link to="/events/finwizz">
            <p className="link">FINWIZZ</p>
          </Link>
        </div>
        <div></div>
        <div className="footerClubInfo">
          <hr />
          <div>
            <h2>FinTech Club</h2>
            <p>
              foster and nurture a financial acumen within the institute,
              through a gamut of initiatives that resonate with the practical
              world of finance.
            </p>
          </div>
        </div>
      </div>
      <div className="footerBottomSection">
        <p>Copyright &#169; 2023 Fintech Club Vit Bhoapl</p>
        <hr />
        <Socials arrow="" bottom="0.5rem" />
      </div>
    </div>
  );
};

export default Footer;
