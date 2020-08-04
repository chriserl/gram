import React from "react";
import brandLogo from "../assets/images/icons/instagram.svg";

export default function Brand(props) {
  return (
    <React.Fragment>
      <a href={props.locale} className="brand">
        <img src={brandLogo} alt="Gram icon" className="icon brand-icon" />
        <p className="brand-name h2">Gram</p>
      </a>
    </React.Fragment>
  );
}
