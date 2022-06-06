import React from "react";
import hellaRadTrees from "../Images/hella-radical-trees.webp";
import goodVibes from "../Images/good-vibes.gif";
import hellaRadical from "../Images/hella-radical.gif";
import glitterText from "../Images/glitter-text.gif";
import woah from "../Images/woah.webp";
import SkateTricks from "./SkateTricks";

const Body = (props) => {
  const { setAppClass } = props;
  return (
    <main className="Body">
      <img
        src={hellaRadTrees}
        className="hella-rad-trees"
        alt="hella radical"
      />
      <img src={goodVibes} className="good-vibes" alt="good vibes" />
      <SkateTricks setAppClass={setAppClass} />
      <img src={woah} className="woah" alt="woah" />
      <img src={hellaRadical} className="hella-radical" alt="hella radical" />
      <img src={glitterText} className="Body" alt="glitter text" />
    </main>
  );
};

export default Body;
