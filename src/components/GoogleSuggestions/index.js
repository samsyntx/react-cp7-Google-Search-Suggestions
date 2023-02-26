import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {typedInput: ''}

  gettingResultAsPerSearch = event => {
    this.setState({typedInput: event.target.value})
  }

  automatedTyped = suggestion => {
    this.setState({typedInput: suggestion})
  }

  render() {
    const {typedInput} = this.state
    const {suggestionsList} = this.props

    const filteredList = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(typedInput.toLowerCase()),
    )
    return (
      <div className="main-page-root-container">
        <img
          className="google-logo-style-main"
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt=" google logo"
        />
        <div className="google-search-box-with-suggestion">
          <div className="search-box-container">
            <img
              className="search-icon-style"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
            />
            <input
              value={typedInput}
              onChange={this.gettingResultAsPerSearch}
              className="search-box-styling"
              type="search"
              placeholder="Search Google"
              id="searchBoxId"
            />
          </div>
          <ul className="unorder-list-container">
            {filteredList.map(eachItem => (
              <SuggestionItem
                key={eachItem.id}
                searchItems={eachItem}
                automatedTyped={this.automatedTyped}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
