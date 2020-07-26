import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import ThematicZoneMap from "./components/thematicZoneMap";
import { ta_zone } from "./data/ta_zone.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col">
            <p>
              Quis et nostrud magna sint. Voluptate dolore qui eiusmod consequat
              nisi reprehenderit. Aute irure duis Lorem magna commodo occaecat
              anim cillum. Ea do elit culpa anim cupidatat proident et irure
              ipsum veniam magna anim. Fugiat occaecat nisi labore sunt cillum
              reprehenderit excepteur fugiat in minim. Aute mollit enim
              excepteur consectetur exercitation consectetur est cillum velit
              dolor. Id quis aute ullamco adipisicing ipsum excepteur excepteur
              non veniam pariatur velit. Ex laboris minim voluptate adipisicing
              amet eu ex duis in est laboris. Fugiat dolore ad elit et officia
              aliqua in tempor exercitation ex sint dolore. Lorem id excepteur
              commodo elit culpa enim cillum sint aute proident sit do esse.
              Sint ipsum voluptate ullamco ut dolor eiusmod aute occaecat dolor
              excepteur nisi labore elit. Dolor incididunt consequat ex laboris
              et duis adipisicing do velit. Nulla qui et sit quis aliqua laboris
              culpa nostrud amet qui elit. Elit eiusmod nulla laboris nulla quis
              velit ea laborum sit in officia. Ea ipsum reprehenderit fugiat et
              ex voluptate nostrud aute ut in duis. Nisi velit culpa sunt
              consequat enim amet tempor.
            </p>
          </div>
          <div className="col">
            <ThematicZoneMap data={ta_zone} height={500} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
