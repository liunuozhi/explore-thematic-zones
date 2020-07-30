import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import ThematicZone from "./components/thematicZone";
import { ta_zone } from "./data/ta_zone.js";
import { TA_TOP_BETA } from "./data/TripAdvisor_thematic_zone_top_10_beta";
import { ig_zone } from "./data/ig_zone.js";
import { IG_TOP_BETA } from "./data/Instagram_thematic_zone_top_10_beta";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Thematic Zones Map</h1>
        <p>
          Incididunt pariatur et enim tempor non irure dolor voluptate sunt duis
          labore. Laborum consectetur nisi minim est cillum aliquip dolor
          exercitation esse dolore. Enim tempor sunt pariatur dolore. Cillum
          magna qui dolor Lorem esse culpa ex ut nisi ex exercitation. Esse esse
          cupidatat consequat Lorem ut cillum velit elit fugiat deserunt velit.
          Occaecat amet proident qui aute do adipisicing et excepteur nostrud
          qui consequat et non exercitation. Quis pariatur aliquip mollit est
          eiusmod. Incididunt qui non ut mollit minim id non irure ad et
          pariatur tempor irure aliqua. Esse enim tempor ipsum cupidatat
          voluptate in. Velit consectetur culpa laboris elit nisi enim aute
          consequat. Aliqua mollit minim qui cillum. Voluptate tempor culpa est
          velit laborum cillum. Sunt officia officia mollit cillum proident ex
          ut non nisi mollit nostrud voluptate minim. Enim in duis Lorem aute
          proident mollit id eiusmod id mollit aliquip adipisicing ad. Amet
          mollit adipisicing dolore excepteur consectetur esse non officia sit.
          Sint officia ex aliqua ea aute ullamco laborum qui aute. Pariatur et
          ullamco consectetur nostrud consectetur consectetur sit culpa laborum
          proident tempor. Incididunt in irure est deserunt aliquip adipisicing
          et adipisicing occaecat cillum. Ut commodo labore ea officia nisi
          velit sint esse nulla minim id. Nulla nostrud proident do
          exercitation. Nostrud eiusmod commodo culpa id esse anim pariatur
          deserunt. Non eiusmod ad est consequat officia ullamco nisi ipsum aute
          aute culpa. Reprehenderit aliqua adipisicing incididunt reprehenderit
          est laborum eu quis ipsum ullamco. Adipisicing laboris officia quis
          proident dolore officia ea ad excepteur sit ullamco culpa magna ut. Do
          mollit non laborum veniam aliqua in esse elit duis mollit mollit
          nostrud non. Nulla tempor pariatur magna irure voluptate velit aute
          anim. Pariatur do ad anim consequat sunt ex ullamco sunt in. Ex amet
          ex aliqua mollit culpa et. Lorem ad non ex eu enim dolor. Officia ex
          esse ullamco dolore laborum deserunt proident ullamco cupidatat do.
          Sunt velit cupidatat reprehenderit voluptate irure Lorem culpa
          consectetur id irure irure aliquip. Ipsum in laboris dolore commodo ad
          officia est do. Eiusmod tempor eiusmod eiusmod Lorem sint duis aliquip
          et duis sunt. Aute ex sunt incididunt nostrud enim deserunt et velit.
          Laboris irure et quis consequat non culpa laborum duis eu non. Labore
          non ullamco incididunt eu fugiat cupidatat nostrud quis. Elit deserunt
          Lorem elit eiusmod veniam velit deserunt nisi. Adipisicing aliquip
          minim labore laborum quis enim Lorem fugiat fugiat incididunt cillum.
          Aute magna in eu enim adipisicing esse duis dolor incididunt. Sunt
          amet ad commodo dolor sunt. Dolore consectetur esse culpa amet mollit
          magna dolore. Do ex reprehenderit adipisicing dolore deserunt ex non
          officia non dolor do. Sint culpa velit irure excepteur duis mollit.
          Occaecat dolor elit aliquip dolore fugiat aliqua aliquip tempor irure
          proident nulla nulla.
        </p>
      </div>

      <div className="map">
        <ThematicZone data={ig_zone} betaData={IG_TOP_BETA} barTopic="IG-3" />
      </div>
    </div>
  );
}

export default App;
