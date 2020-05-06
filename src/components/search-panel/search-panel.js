import React, { Component } from 'react'

import './search-panel.css'

export default class SearchPanel extends Component {
  state = {
    query: '',
  }

  onSearchChange = (e) => {
    const { onChangeSearch } = this.props
    const query = e.target.value
    this.setState({ query })
    onChangeSearch(query)
  }

  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="type to search"
        onChange={this.onSearchChange}
        value={this.state.query}
      />
    )
  }
}
