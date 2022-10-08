import React, { useState, useEffect } from "react";
import "../styles/App.css";
const Loader = () => <div id="loader">Loading...</div>;
const fetchActivity = async (type) => {
  const rawData = await fetch(
    `http://www.boredapi.com/api/activity?type=${type}`
  );
  const data = await rawData.json();
  return data;
};
const App = () => {
  const [loading, setLoading] = useState(true);
  const [activity, setActivity] = useState();
  const handleClick = (val) => {
    setLoading(true);
    fetchActivity(val).then((data) => {
      setActivity(data.activity);
      setLoading(false);
    });
  };
  useEffect(() => {
    fetchActivity("education").then((data) => {
      setActivity(data.activity);
      setLoading(false);
    });
  }, []);
  return (
    <div id="main">
      {loading ? <Loader /> : <div id="activity">{activity}</div>}
      <button onClick={() => handleClick("recreational")} id="btn-recreation">
        Recreational
      </button>
      <button onClick={() => handleClick("education")} id="btn-education">
        Education
      </button>
    </div>
  );
};
export default App;
