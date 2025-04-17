import React from "react";

const Box = (props) => {
  let result;

  if (
    props.title === "Computer" &&
    props.result !== "tie" &&
    props.result !== ""
  ) {
    result = props.result === "win" ? "lose" : "win";
  } else {
    result = props.result;
  }

  return (
    <div className="box">
      <h1>{props.title}</h1>
      <h2>{props.item && props.item.name}</h2>
      <div className="img-container">
        <img src={props.item && props.item.img} alt="" />
      </div>
      <h2>{result}</h2>
    </div>
  );
};

export default Box;
