import './index.css'

const SuggestionItem = props => {
  const {searchItems, automatedTyped} = props
  const {suggestion} = searchItems

  const clickedOnArrow = () => {
    automatedTyped(suggestion)
  }

  return (
    <li>
      <div className="list-item-container">
        <p>{suggestion}</p>
        <img
          onClick={clickedOnArrow}
          className="arrow-icon"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
        />
      </div>
    </li>
  )
}

export default SuggestionItem
