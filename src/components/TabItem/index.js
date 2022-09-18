import './index.css'

const TabItem = props => {
  const {tabDetails, activeTab, isActive} = props
  const {tabId, displayText} = tabDetails

  const activeTabClassName = isActive ? 'isActiveClassName' : ' '

  const onclickTabItem = () => {
    activeTab(tabId)
  }
  return (
    <li className="tab-list-container">
      <button
        type="button"
        className={`display-tab-name ${activeTabClassName}`}
        onClick={onclickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
