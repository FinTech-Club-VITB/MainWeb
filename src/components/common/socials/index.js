import React from "react";
import {
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import { MdDoubleArrow } from "react-icons/md";
import "./index.scss";

const Socials = (props) => {
  return (
    <div style={{ bottom: props.bottom ?? 0 }} className="socialsContainer">
      <div style={{ fontSize: props.size }} className="social">
        <a
          href="https://instagram.com/fintechclub_vitb?igshid=ZDdkNTZiNTM="
          target="_blank"
          rel="noreferrer"
        >
          <AiFillInstagram />
        </a>
        <a
          href="https://www.linkedin.com/company/fintech-club-vit-bhopal/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin />
        </a>
        <a
          href="https://twitter.com/fintech_vitb"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillTwitterSquare />
        </a>
        <a
          href="https://youtube.com/@fintechclub-vitb"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillYoutube />
        </a>
      </div>
      {props.arrow ?? (
        <MdDoubleArrow
          className="arrow"
          onClick={() => {
            window.location.href = window.location.origin + `/#aboutSection`;
          }}
        />
      )}
    </div>
  );
};

export default Socials;
