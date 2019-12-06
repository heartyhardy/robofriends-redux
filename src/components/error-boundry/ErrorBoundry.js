import React, { Component } from "react";

class ErrorBoundry extends Component {
  state = {
    hasError: false
  };

  componentDidCatch(error, info) {
    this.setState({ hasError: true, error: info });
  }

  render() {
    if (this.state.hasError) {
      return (
        <React.Fragment>
          <h1>Oops! something went wrong!</h1>
          <h3>This page contains errors</h3>
        </React.Fragment>
      );
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundry;
