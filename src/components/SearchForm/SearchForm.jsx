import React, { Component } from 'react';

export default class SearchForm extends Component {
  state = {
    query: '',
  };

  handleChenge = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    const { query } = this.state;
    const { fetchCurrentWeather } = this.props;
    e.preventDefault();
    fetchCurrentWeather(query);
  };

  render() {
    const { query } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="query"
          value={query}
          placeholder="Enter the city"
          onChange={this.handleChenge}
        />
        <button type="submit">Add city</button>
      </form>
    );
  }
}
