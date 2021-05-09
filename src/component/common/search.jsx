import React, { Component } from "react";
import { AiOutlineSearch } from "react-icons/ai";

class Search extends Component {
  state = {
    data: "",
  };

  render() {
    const { added, onChange, id, data } = this.props;
    return (
      <div className={added}>
        <input
          onChange={onChange}
          value={data}
          type="text"
          id={id}
          placeholder="Search"
        />
        <label htmlFor={id}>
          <span>
            <AiOutlineSearch />
          </span>
        </label>
      </div>
    );
  }
}

export default Search;
