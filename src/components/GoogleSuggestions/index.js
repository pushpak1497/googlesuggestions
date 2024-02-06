import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchItem: ''}

  onChangeInput = event => {
    this.setState({
      searchItem: event.target.value,
    })
  }

  appendSuggestion = suggestion => {
    this.setState({
      searchItem: suggestion,
    })
  }

  render() {
    const {searchItem} = this.state
    const {suggestionsList} = this.props
    const fileredData = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchItem.toLowerCase()),
    )
    console.log(searchItem.toLowerCase())
    return (
      <div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
            alt="search icon"
          />
          <input
            type="search"
            onChange={this.onChangeInput}
            value={searchItem}
          />
          <ul className="list-container">
            {fileredData.map(eachItem => (
              <SuggestionItem
                listItem={eachItem}
                key={eachItem.id}
                append={this.appendSuggestion}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
