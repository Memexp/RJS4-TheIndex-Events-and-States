import React, { Component } from "react";

class BookList extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.book.title}</td>
        <td>{this.props.author}</td>
        <td>
          <button
            className="btn"
            style={{ backgroundColor: this.props.book.color }}
          />
        </td>
      </tr>
    );
  }
}

export default BookList;
