const SuggestionItem = props => {
  const {searchItems} = props
  const {suggestion} = searchItems
  return (
    <li className="list-item-container">
      <p>{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
      />
    </li>
  )
}

export default SuggestionItem
