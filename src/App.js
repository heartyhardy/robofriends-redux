import React, { Component } from "react";
import { connect } from "react-redux";
import CardList from "./components/cardlist/CardList";
import SearchBox from "./components/search/Search";
import ErrorBoundry from "./components/error-boundry/ErrorBoundry";
import "./App.css";

import {searchTermChanged, robotsRequested} from './actions/actions'

const mapStateToProps = state => {
  console.log("State", state)
  return {
    isPending: state.requestRobots.isPending,
    robots: state.requestRobots.robots,
    error: state.requestRobots.error,
    search: {
      term: state.searchRobots.search.term
    }
  };
};

const mapDispatchToProps = dispatch => {
  return{
    searchTermChanged: (event) => dispatch(searchTermChanged(event.target.value)),
    onRequestRobots: () => dispatch(robotsRequested()) // Same as using dispatch(requestRobots)
  }
}

class App extends Component {

  componentDidMount() {
    this.props.onRequestRobots()
  }

  render() {
    const {search, searchTermChanged, robots} = this.props;
    console.log(this.props)
    let users = robots.filter(user => {
      return user.name.toLowerCase().includes(search.term);
    });

    return (
      <React.Fragment>
        <ErrorBoundry>
          <SearchBox changed={searchTermChanged} />
          <main className="app-main">
            <CardList users={users} />
          </main>
        </ErrorBoundry>
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
