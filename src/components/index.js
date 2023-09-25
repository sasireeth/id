import './index.css'

const ListItem = props => {
  const {HistoryList, dele} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = HistoryList

  function onDel() {
    dele(id)
  }

  return (
    <li>
      <p>{timeAccessed}</p>
      <div>
        <img src={logoUrl} className="logo" />
        <p>{title}</p>
        <p>{domainUrl}</p>
      </div>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="img1"
          onClick={onDel}
        />
      </div>
    </li>
  )
}
export default ListItem
