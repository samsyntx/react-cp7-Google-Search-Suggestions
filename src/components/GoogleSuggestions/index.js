import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  render() {
    const {suggestionsList} = this.props

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
            <input className="search-box-styling" type="search" />
          </div>
          {suggestionsList.map(eachItem => (
            <SuggestionItem key={eachItem.id} searchItems={eachItem} />
          ))}
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
