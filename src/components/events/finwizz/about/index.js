import React from "react";
import "./index.scss";

const About = () => {
  return (
    <div className="finwizzAbout">
      <div className="aboutTitleContainer">
        <h2 className="aboutTitle">ABOUT THE EVENT</h2>
      </div>

      <p className="aboutPara">
        The inception of FinTech Club VITB, an organization led by zealous
        students, took place on the auspicious day of December 13th, 2022, with
        the goal of cultivating a passion for finance among students as an
        academic pursuit and a prospective vocation.
      </p>

      <p className="aboutPara">
        The inauguration ceremony that followed was a momentous occasion,
        augmented by the nail-biting competition of the FinWizz quiz,
        characterized by a high-stakes buzzer format. The victorious "Margin
        Call" team and the close runner-up "Team Equity" were presented with
        thrilling gift hampers to honor their triumph.
      </p>
    </div>
  );
};

export default About;
