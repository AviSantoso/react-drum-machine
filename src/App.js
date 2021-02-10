import React, { useState } from "react";
import bank from "./bank.json";

import "./styles.css";

export default function App() {
  const [display, setDisplay] = useState("Press a pad to play.");

  function playAudio(data) {
    const audio = document.getElementById(data.keyTrigger);

    if (!!audio) {
      setDisplay(data.id);
      audio.play();
    }
  }

  function onKeyDown(e) {
    const matching = bank.find((x) => x.keyCode === e.keyCode);
    if (matching) {
      playAudio(matching);
    }
  }

  React.useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onkeydown);
  }, []);

  return (
    <div id="root">
      <div id="drum-machine">
        <div id="display">{display}</div>
        <div id="pad-container">
          {bank.map((x) => (
            <Pad data={x} playAudio={playAudio} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Pad(props) {
  const { data, playAudio } = props;
  const padId = `pad-${data.keyTrigger}`;

  const onClick = () => playAudio(data);

  return (
    <button
      className="drum-pad"
      id={padId}
      key={data.keyTrigger}
      onClick={onClick}
    >
      {data.keyTrigger}
      <audio src={data.url} className="clip" id={data.keyTrigger} />
    </button>
  );
}
