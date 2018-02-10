import React from 'react'
import './search.css'

class Search extends React.Component {
  render() {
    return <div className="search">
      <input className="searchBar" type="text"
      placeholder="Search..."
      value={this.props.value}
      onChange={this.props.onChange}/>
    </div>
  }
}

export default Search
