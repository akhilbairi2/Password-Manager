import {Component} from 'react'

import {v4} from 'uuid'

import PasswordItem from './component/PasswordItem'

import './App.css'

class App extends Component {
  state = {
    passwordsList: [],
    websiteInput: '',
    usernameInput: '',
    passwordInput: '',
    userInput: '',
    isShow: false,
  }

  onDeleteBtn = id => {
    const {passwordsList} = this.state
    const updateList = passwordsList.filter(each => id !== each.id)
    this.setState({
      passwordsList: updateList,
    })
  }

  onChangeCheck = e => {
    this.setState({
      isShow: e.target.checked,
    })
    console.log(e.target.checked)
  }

  onAddBtn = e => {
    e.preventDefault()
    const {websiteInput, passwordInput, usernameInput} = this.state
    const newList = {
      id: v4(),
      website: websiteInput,
      username: usernameInput,
      password: passwordInput,
    }
    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, newList],
      usernameInput: '',
      websiteInput: '',
      passwordInput: '',
    }))
  }

  onChangeUserInput = e => {
    this.setState({
      userInput: e.target.value,
    })
  }

  onChangeUsername = e => {
    this.setState({
      usernameInput: e.target.value,
    })
  }

  onChangeWebsite = e => {
    this.setState({
      websiteInput: e.target.value,
    })
  }

  onChangePassword = e => {
    this.setState({
      passwordInput: e.target.value,
    })
  }

  render() {
    const {
      passwordsList,
      passwordInput,
      usernameInput,
      websiteInput,
      userInput,
      isShow,
    } = this.state
    const newPasswordsList = passwordsList.filter(each =>
      each.website.toLowerCase().includes(userInput.toLowerCase()),
    )
    const count = newPasswordsList.length
    return (
      <div className="app-container1">
        <div className="app-container2">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="app-logo"
          />
          <div className="password-container">
            <form className="form" onSubmit={this.onAddBtn}>
              <h1 className="password-head"> Add New Password </h1>
              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="website-img"
                />
                <input
                  type="text"
                  className="website-input"
                  placeholder="Enter Website"
                  onChange={this.onChangeWebsite}
                  value={websiteInput}
                />
              </div>
              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="website-img"
                />
                <input
                  type="text"
                  className="website-input"
                  placeholder="Enter Username"
                  onChange={this.onChangeUsername}
                  value={usernameInput}
                />
              </div>
              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="website-img"
                />
                <input
                  type="password"
                  className="website-input"
                  placeholder="Enter Password"
                  onChange={this.onChangePassword}
                  value={passwordInput}
                />
              </div>
              <button type="submit" className="add-btn">
                Add
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="pm-img"
            />
          </div>
          <div className="password-container2">
            <div className="count-container">
              <div className="count-con">
                <h1 className="count"> Your Passwords </h1>
                <p className="span"> {count} </p>
              </div>
              <div className="search-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="search-icon"
                />
                <input
                  type="search"
                  className="search"
                  onChange={this.onChangeUserInput}
                />
              </div>
            </div>
            <hr className="line1" />
            <div className="check-container">
              <div className="check-label-con">
                <input
                  id="check"
                  type="checkbox"
                  className="checkbox"
                  onChange={this.onChangeCheck}
                />
                <label htmlFor="check" className="check-label">
                  Show Passwords
                </label>
              </div>
              {count !== 0 ? (
                <ul className="ul-container">
                  {newPasswordsList.map(eachPasswordList => (
                    <PasswordItem
                      passwordDetails={eachPasswordList}
                      key={eachPasswordList.id}
                      onDeleteBtn={this.onDeleteBtn}
                      isShow={isShow}
                    />
                  ))}
                </ul>
              ) : (
                <div className="no-passwords-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                    alt="no passwords"
                    className="no-passwords-img"
                  />
                  <p className="no-passwords"> No Passwords </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
