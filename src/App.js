import React, { Component } from "react";
import { connect } from "react-redux";
import CardList from "./components/cardlist/CardList";
import SearchBox from "./components/search/Search";
import ErrorBoundry from "./components/error-boundry/ErrorBoundry";
import "./App.css";

import {searchTermChanged, robotsRequested} from './actions/actions'

const mapStateToProps = state => {
  return {
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
    robots: state.requestRobots.robots,
    search:{
      term: state.searchRobots.search.term
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    searchTermChanged: (event) => dispatch(searchTermChanged(event.target.value)),
    onRobotsRequested: () => dispatch(robotsRequested())
  }
}

class App extends Component {

  componentDidMount() {
    this.props.onRobotsRequested()
  }

  render() {
    const {search, searchTermChanged, robots} = this.props
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
