import { languages } from "./helper/data.js";
import "./App.css";
import reactsvg from "./assets/react.svg";
import Card from "./components/Card.js";

function App() {
  return (
    <div className="App">
      <img className="reactlogo" src={reactsvg} alt="reactlogo" />

      <div className="down-container">
        <div>
          <h2>Language</h2>
          <div className="main-container">
            {languages.map((languages, index) => {
              return (
                <div className="container">
                  <Card key={index} {...languages} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
