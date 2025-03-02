const { Component } = require('react');

class SearchBox extends Component {
  render() {
    return (
      <input
        className={this.props.className}
        type="search"
        placeholder={this.props.plaaceholder}
        onChange={this.props.onChangeHandler}
      />
    );
  }
}

export default SearchBox;
