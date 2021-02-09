import "./styles.css";

export default function App() {
  const padButtons = [
    { key: "Q" },
    { key: "W" },
    { key: "E" },
    { key: "A" },
    { key: "S" },
    { key: "D" },
    { key: "Z" },
    { key: "X" },
    { key: "C" }
  ];
  return (
    <div id="root">
      <div id="drum-machine">
        <div id="display"></div>
        <div id="pad-container">
          {padButtons.map((x) => (
            <button className="drum-pad" id={"pad" + x.key} key={x.key}>
              {x.key}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
