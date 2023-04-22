import React from "react";
import "./index.scss";
import Person from "../../../../assets/teams/dummy.png";

const Speaker = () => {
  return (
    <div className="finwizzSpeaker">
      <h2>OUR SPEAKER</h2>
      <div className="speakerInfo">
        <span>
          <h3>NAMAN ARORA</h3>
          <p>
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.It was popularised in the 1960s with the release of Letraset
            sheets containing Lorem Ipsum passages, and more recently with
            desktop publishing software like Aldus PageMaker including versions
            of Lorem Ipsum.t was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum. Lorem Ipsum.t was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </span>
        <img className="speakerImage" src={Person} alt="speaker" />
      </div>
    </div>
  );
};

export default Speaker;
