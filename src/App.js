import React, { Component } from "react";
import axios from "axios";
import CardList from "./components/cardlist/CardList";
import SearchBox from "./components/search/Search";
import ErrorBoundry from "./components/error-boundry/ErrorBoundry";
import "./App.css";

class App extends Component {
  state = {
    users: [],
    search: {
      term: ""
    }
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
      const users = res.data;
      this.setState({ users });
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextState.search.term.length !== this.state.search.term.length ||
      nextState.users.length !== this.state.users.length
    );
  }

  searchTermChanged = event => {
    this.setState({ search: { term: event.target.value } });
  };

  render() {
    let users = this.state.users.filter(user => {
      return user.name.toLowerCase().includes(this.state.search.term);
    });

    return (
      <React.Fragment>
        <ErrorBoundry>
          <SearchBox changed={this.searchTermChanged} />
          <main className="app-main">
            <CardList users={users} />
          </main>
        </ErrorBoundry>
      </React.Fragment>
    );
  }
}

export default App;
