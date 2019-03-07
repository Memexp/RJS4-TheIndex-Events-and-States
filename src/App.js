import React, { Component } from "react";

// Data
import authors from "./data";

// Components
import Sidebar from "./Sidebar";
import AuthorsList from "./AuthorsList";
import AuthorDetail from "./AuthorDetail";

class App extends Component {
  state = {
    currentAuthor: null,
    // the app is the one that in charge to change the state
    filteredAuthors: authors
    // at first we want all the others until the user types in the search bar
  };

  selectAuthor = author => {
    const newAuthor = author;
    // update your value first then set state
    this.setState({ currentAuthor: newAuthor });
  };
  backtoList = () => {
    this.setState({ currentAuthor: null });
  };

  getContentView = () => {
    if (this.state.currentAuthor) {
      return <AuthorDetail author={this.state.currentAuthor} />;
    } else {
      return (
        <AuthorsList
          authors={this.state.filteredAuthors}
          selectAuthor={this.selectAuthor}
          filterAuthors={this.filterAuthors}
        />
      );
    }
  };

  filterAuthors = query => {
    // we need this finction to change the value of filter authors
    let filteredAuthors = authors.filter(author => {
      const authorName = `${author.first_name} ${author.last_name}`;
      return authorName.toLowerCase().includes(query.toLowerCase());
      // is the query in the combination the first&last name? if its true, filter it and that list will be the new filteredAuthors
    });
    this.setState({ filteredAuthors: filteredAuthors });
  };

  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar backtoList={this.backtoList} />
          </div>
          <div className="content col-10">{this.getContentView()}</div>
        </div>
      </div>
    );
  }
}

export default App;
