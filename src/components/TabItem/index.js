import './index.css'

const TabItem = props => {
  const {eachItem, isTabActive, onClicked} = props
  const {tabId, displayText} = eachItem
  const btnClass = isTabActive ? 'active-button' : 'button'
  const onTabClicked = () => {
    onClicked(tabId)
  }

  return (
    <li className="list-item">
      <button className={btnClass} type="button" onClick={onTabClicked}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
