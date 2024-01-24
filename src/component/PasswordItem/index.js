import './index.css'

const PasswordItem = props => {
  const {passwordDetails, onDeleteBtn, isShow} = props
  const {id, website, username, password} = passwordDetails
  const initial = username.slice(0, 1).toUpperCase()
  const onDelete = () => {
    onDeleteBtn(id)
  }
  return (
    <li className="li-container">
      <p className="initial"> {initial} </p>{' '}
      <div className="details-container">
        <p className="p1"> {website} </p> <p className="p1"> {username} </p>{' '}
        {isShow ? (
          <p className="p1"> {password} </p>
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
            className="stars-icon"
          />
        )}{' '}
      </div>{' '}
      <button
        type="button"
        className="delete-btn"
        onClick={onDelete}
        data-testId="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>{' '}
    </li>
  )
}
export default PasswordItem
