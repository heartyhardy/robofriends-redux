import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import CardList from "./components/cardlist/CardList";
import SearchBox from "./components/search/Search";
import ErrorBoundry from "./components/error-boundry/ErrorBoundry";
import "./App.css";

import {searchTermChanged} from './actions/actions'

const mapStateToProps = state => ({
  search:{
    term: state.search.term
  }
})

const mapDispatchToProps = dispatch => ({
  searchTermChanged: (event) => dispatch(searchTermChanged(event.target.value))
})

class App extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
      const users = res.data;
      this.setState({ users });
    });
  }

  render() {
    const {search, searchTermChanged} = this.props
    let users = this.state.users.filter(user => {
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
