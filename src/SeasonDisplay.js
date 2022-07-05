import "./SeasonDisplay.css";
import React from "react";

const SeasonDisplay = (props) => {
  console.log(props.latitude);
  const season = getSeason(props.latitude, new Date().getMonth());
  console.log("season: " + season);
  const { text, iconName } = seasonConfig[season]; //{text,iconName}
  console.log({ text, iconName });
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

const seasonConfig = {
  summer: {
    text: "Lets hit the beach",
    iconName: "sun",
  },
  winter: {
    text: "Brrr it is cold",
    iconName: "snowflake",
  },
};
const getSeason = (latitude, month) => {
  if (month > 2 && month < 9) {
    return latitude > 0 ? "winter" : "summer";
  } else {
    return latitude > 0 ? "winter" : "summer";
  }
};

export default SeasonDisplay;
