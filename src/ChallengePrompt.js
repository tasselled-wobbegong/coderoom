import React, { Component } from "react";
import { render } from "react-dom";
// import "./ChallengePrompt.css";
import { DM } from "./DungeonMaster";

class ChallengePrompt extends Component {
  render() {
    return (
      <DM.Consumer>
        {context => {
          return (
            <div>
              {context.promptText}
            </div>
          )}}
      </DM.Consumer>
    );
  }
}

export default ChallengePrompt;