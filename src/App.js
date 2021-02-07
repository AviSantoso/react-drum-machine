import "./styles.css";

export default function App() {
  const padButtons = [...Array(9).keys()];
  return (
    <div id="root">
      <div id="app">
        <div id="pad-container">
          {padButtons.map((x) => (
            <div className="pad" id={"pad" + x}></div>
          ))}
        </div>
      </div>
    </div>
  );
}
