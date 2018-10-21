import React, { Component } from "react";
import { connect } from "react-redux";
import "../css/Instructions.css";
import "../css/Buttons.css";

import ServerLoadingStatus from "../components/ServerLoadingStatus";

class Instructions extends Component {
  state = { active: true };

  render() {
    return (
      <div className="instructions">
        <div
          className={
            this.state.active ? "instructions-opacity" : "instructions-hidden"
          }
        />
        <div
          className={
            this.state.active
              ? "instructions-card-container"
              : "instructions-hidden"
          }
        >
          <div
            className={
              this.state.active ? "instructions-card" : "instructions-hidden"
            }
          >
            <ServerLoadingStatus />
            <div className="instructions-card-instr">
              <h1>Welcome to ConcertPlan!</h1>
              <p>Instructions on how to use ConcertPlan</p>
              {this.props.herokuLoaded ? (
                <div className="join-plan">
                  <button
                    className=""
                    onClick={() => this.setState({ active: false })}
                  >
                    close
                  </button>
                </div>
              ) : (
                <div className="disabled-button">
                  <button disabled>Waiting for Heroku...</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  herokuLoadingStatus: state.heroku.herokuLoadingStatus,
  herokuLoaded: state.heroku.herokuLoaded,
  herokuLoadFailed: state.heroku.loadFailed
});

//   const mapDispatchToProps = dispatch => ({
//     pingServer: () => dispatch(pingServer())
//   });

export default connect(
  mapStateToProps,
  null
)(Instructions);
