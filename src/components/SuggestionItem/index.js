// Write your code here
const SuggestionItem = props => {
  const {listItem, append} = props
  const {suggestion} = listItem

  const addSuggestion = () => {
    append(suggestion)
  }

  return (
    <div>
      <li>
        <p>{suggestion}</p>
      </li>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        onClick={addSuggestion}
      />
    </div>
  )
}
export default SuggestionItem
