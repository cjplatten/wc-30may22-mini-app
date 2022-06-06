import React, { useState } from "react";
import skateboarder from "../Images/skater-ghost.png";
import ramp from "../Images/small-skate-ramp-pbr-textures-01.jpeg";

const SkateTricks = (props) => {
  const { setAppClass } = props;

  const [skateboarderClass, setSkateboarderClass] =
    useState("skateboarder-ready");

  function doAFlip() {
    setSkateboarderClass("skateboarder-flip");
  }

  function pleaseStopFlipping() {
    setSkateboarderClass("skateboarder-ready");
  }
  function spinFaster() {
    setSkateboarderClass("skateboarder-faster");
  }
  function spinEvenFaster() {
    setSkateboarderClass("skateboarder-even-faster");
  }
  function spinOhNoFaster() {
    setSkateboarderClass("skateboarder-oh-no-faster");
  }
  function whatHaveYouDone() {
    setAppClass("app-what-have-you-done");
  }

  let buttons;
  if (skateboarderClass === "skateboarder-ready") {
    buttons = <button onClick={doAFlip}>Do a flip</button>;
  } else if (skateboarderClass === "skateboarder-flip") {
    buttons = (
      <>
        <button onClick={pleaseStopFlipping}>Please Stop</button>
        <button onClick={spinFaster}>SPIN FASTER</button>
      </>
    );
  } else if (skateboarderClass === "skateboarder-faster") {
    buttons = (
      <>
        <button onClick={pleaseStopFlipping}>Please Stop</button>
        <button onClick={spinEvenFaster}>EVEN FASTER</button>
      </>
    );
  } else if (skateboarderClass === "skateboarder-even-faster") {
    buttons = (
      <>
        <button onClick={pleaseStopFlipping}>Please Stop</button>
        <button onClick={spinOhNoFaster}>Oh no</button>
      </>
    );
  } else if (skateboarderClass === "skateboarder-oh-no-faster") {
    buttons = (
      <>
        <button onClick={pleaseStopFlipping}>Please Stop</button>
        <button onClick={whatHaveYouDone}>What have you done</button>
      </>
    );
  }

  return (
    <div className="skate-tricks">
      <img
        src={skateboarder}
        className={`skateboarder ${skateboarderClass}`}
        alt="skateboarding ghost"
      />
      <img src={ramp} className="ramp" alt="skate ramp" />
      {buttons}
    </div>
  );
};

export default SkateTricks;
