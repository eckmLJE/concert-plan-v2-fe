import React, { Component } from "react";
import { connect } from "react-redux";

import { pingServer } from "../actions/heroku";

class ServerLoadingStatus extends Component {
  componentDidMount = () => {
    this.props.pingServer();
  };

  render() {
    return (
      <div className="home-card">
        <div className="loading-container">
          <h4>
            Heroku Loading Status:{" "}
            <span
              className={
                this.props.herokuLoaded ? "server-loaded" : "server-loading"
              }
            >
              {this.props.herokuLoaded ? "LOADED!" : "Loading..."}
            </span>
          </h4>

          <p>
            Heroku Free may take 10 seconds or so to spin up the back end.
            Thanks for your patience!
          </p>
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
