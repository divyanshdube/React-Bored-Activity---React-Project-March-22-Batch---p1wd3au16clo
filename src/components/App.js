import React, { useState, useEffect } from "react";
import "../styles/App.css";

const Loader = () => <div id="loader">Loading...</div>;

const App = () => {
  function makeURL(type) {
    console.log(type);
    return "http://www.boredapi.com/api/activity?type=${type}";
  }

  const [activity, isSetActivity] = useState(null);

  async function getResponse(value) {
    isSetActivity(null);

    let result = makeURL(value);

    const output = await fetch(result);
    let data = await output.json();
    isSetActivity(data.activity);
  }

  useEffect(() => getResponse("education"), []);

  return (
    <div id="main">
      {activity ? <div id="activity"> {activity}</div> : <Loader />}
      <button id="btn-recreation" onClick={() => getResponse("recreational")}>
        Recreational
      </button>
      <button id="btn-education" onClick={() => getResponse("education")}>
        Education
      </button>
    </div>
  );
};

export default App;
