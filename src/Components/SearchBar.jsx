import React, { Component } from "react";

class SearchBar extends Component {
  handleChange = event => {
    const { value } = event.target;

    if (value === "asc" || "desc") {
      const order = event.target.value;
      this.props.changeOrder(order);
    } else {
      const sort_by = event.target.value;
      console.log(sort_by);
      this.props.changeSortBy(sort_by);
    }
  };

  render() {
    return (
      <form className="filterForm">
        <label>
          Sort by
          <select onChange={this.handleChange}>
            <option className="formContent" value="created_at">
              Recently added
            </option>
            <option className="formContent" value="votes">
              Most popular
            </option>
            <option className="formContent" value="comment_count">
              Most commented
            </option>
            <option value="title">title</option>
            <option value="author">author</option>
          </select>
        </label>
        <label htmlFor="order">
          order :{" "}
          <select onChange={this.handleChange} name="order" id="order">
            <option value="asc">ascending</option>
            <option value="desc">descending</option>
          </select>
        </label>
      </form>
    );
  }
}

export default SearchBar;
