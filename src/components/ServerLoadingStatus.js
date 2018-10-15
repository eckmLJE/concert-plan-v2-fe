import React, { Component } from "react";
import { connect } from "react-redux";

import { pingServer } from "../actions/heroku";

class ServerLoadingStatus extends Component {
  componentDidMount = () => {
    this.props.pingServer();
  };

  render() {
    console.log(
      `Loading Status: ${this.props.herokuLoadingStatus}`,
      `\nLoaded: ${this.props.herokuLoaded}`,
      `\nLoading Failed: ${this.props.herokuLoadFailed}`
    );
    return (
      <div className="home-card">
        <div className="loading-container">
          Heroku Loading Status:{" "}
          <span
            className={
              this.props.herokuLoaded ? "server-loaded" : "server-loading"
            }
          >
            {this.props.herokuLoaded ? "LOADED!" : "LOADING..."}
          </span>
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

const mapDispatchToProps = dispatch => ({
  pingServer: () => dispatch(pingServer())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServerLoadingStatus);
