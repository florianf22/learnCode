import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="mt-0 text-base relative shadow my-4 p-1 rounded-sm">
        <form
          className="text-base relative max-w-full"
          onSubmit={this.onFormSubmit}
        >
          <div className="clear-both">
            <label className="block mb-1 font-bold normal-case text-sm">
              Search a Video
            </label>
            <input
              className="border-2 w-full"
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
