import React from "react";
import { useState } from "react";

const WhatHaveYouDone = (props) => {
  const { appClass, setAppClass } = props;

  const [buttonClass, setButtonClass] = useState("1");
  const [phrase, setPhrase] = useState("woah");

  function progress() {
    if (appClass !== "app-disappear") {
      setAppClass("app-disappear");
    }
    if (buttonClass === "1") {
      setButtonClass("2");
      setPhrase("what did you do?");
    }
    if (buttonClass === "2") {
      setButtonClass("3");
      setPhrase("HELL YEAH!");
    }
  }

  return (
    <section className="what-have-you-done">
        {buttonClass === '3' && <p className="what-have-you-done-text-pt3">Some sweet heckin tricks is what you've done!!!</p>}
        
      <button
        className={`what-have-you-done-button ${buttonClass}`}
        onClick={progress}
      >{`${phrase}`}</button>
    </section>
  );
};

export default WhatHaveYouDone;
