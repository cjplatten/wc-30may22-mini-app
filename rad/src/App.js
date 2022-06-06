import { useState } from "react";
import "./App.css";
import Body from "./Components/Body";
import Header from "./Components/Header";
import WhatHaveYouDone from "./Components/WhatHaveYouDone";

function App() {
  const [appClass, setAppClass] = useState("");
  console.log(appClass);
  return (
    <div className="Top-App">
      {appClass !== "app-disappear" && (
        <section className={`App ${appClass}`}>
          <Header />
          <Body setAppClass={setAppClass} />
        </section>
      )}
      {(appClass === "app-what-have-you-done" ||
        appClass === "app-disappear") && (
        <WhatHaveYouDone setAppClass={setAppClass} appClass={appClass} />
      )}
    </div>
  );
}

export default App;
