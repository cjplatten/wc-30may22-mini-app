import React from "react";
import skateboarder from '../Images/skater-ghost.png';
import hellaRadTrees from '../Images/hella-radical-trees.webp';
import goodVibes from '../Images/good-vibes.gif';
import hellaRadical from '../Images/hella-radical.gif';
import glitterText from '../Images/glitter-text.gif';
import woah from '../Images/woah.webp';


const Body = () => {
  return (
    <main className="Body">
      <img src={hellaRadTrees} className="hella-rad-trees" alt="hella radical" />
      <img src={skateboarder} className="skateboarder" alt="skateboarding ghost" />
      <img src={goodVibes} className="good-vibes" alt="good vibes" />
      <img src={hellaRadical} className="hella-radical" alt="hella radical" />
      <img src={glitterText} className="Body" alt="skateboarding ghost" />
      <img src={woah} className="Body" alt="skateboarding ghost" />
    </main>
  );
};

export default Body;
