import React from "react";
import hng9SlackPicture from "./images/HNG9-slack.png";
import hng9GithubPicture from "./images/HNG9-Github-Icon.png";

export default function Main2() {
  return (
    <div className="main2">
      <img src={hng9SlackPicture} className="hng9-slack-picture" />
      <img src={hng9GithubPicture} className="hng9-github-picture" />
    </div>
  );
}
