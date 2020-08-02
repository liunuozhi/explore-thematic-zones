import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Scrollama, Step } from "react-scrollama";
import Map from "./map.jsx";
import UserGuideHelper from "./helperIcon";

// introduction
const introduction = (
  <p>
    Aliquip aute aliquip do elit laborum ex nulla labore Lorem aliqua culpa
    fugiat. Non et labore aute magna Lorem. Veniam sit tempor ipsum occaecat
    elit cupidatat elit laboris aliqua. Id ut sunt id consectetur nostrud nulla
    duis quis proident incididunt aliqua est id enim. Aute irure pariatur irure
    anim consectetur consectetur in occaecat enim labore. Elit cillum non
    excepteur incididunt sit nostrud adipisicing aliquip occaecat in mollit. Do
    ipsum aliqua veniam esse esse id. Et nisi deserunt magna minim est sit
    laborum. Ut cillum Lorem ex reprehenderit. Proident cupidatat id labore
    reprehenderit excepteur deserunt id in. Culpa sit exercitation aute sit
    magna eiusmod consequat officia. Do labore commodo nisi do nostrud nostrud
    non nulla sunt duis veniam esse qui. Officia amet reprehenderit proident
    proident aliqua id. Voluptate laborum est esse in eu aliqua incididunt
    exercitation ea veniam Lorem. Nisi occaecat proident pariatur consequat.
    Tempor nostrud proident velit consectetur reprehenderit elit ad minim Lorem
    labore est est aliqua.
  </p>
);

function App() {
  // scrollama step index
  const [currentStepIndex, setCurrentStepIndex] = useState(1);
  return (
    <div className="App">
      <div className="map">
        <Map step={currentStepIndex} />
      </div>

      <div className="question">
        <UserGuideHelper />
      </div>

      <div className="content">
        <Scrollama onStepEnter={(index) => setCurrentStepIndex(index)}>
          <Step data={1} key={1}>
            <h1>Explore Singapore Thematic Zone</h1>
          </Step>
          <Step data={2} key={2}>
            <div style={{ margin: "100vh 0" }}>{introduction}</div>
          </Step>
          <Step data={3} key={3}>
            <div style={{ margin: "100vh 0" }}>{introduction}</div>
          </Step>
          <Step data={4} key={4}>
            <div style={{ margin: "100vh 0" }}>{introduction}</div>
          </Step>
        </Scrollama>
      </div>
    </div>
  );
}

export default App;
