// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
// import './App.css';
// import SignUp from './signup'  Auth0
// import Login from './login'   Auth0
import Welcome from './Welcome'
import MainMenu from './mainMenu'
import Translate from './Translate'
import Converse from './Converse'
import Map from './Map' 
import {
  BrowserRouter,
  Switch,
  Route,
  //  Link,
  // useHistory
} from "react-router-dom";

import Navbar from './Navbar';
import Start from './components/Start.js'
import Login from './components/registration/Login.js'
import Signup from './components/registration/Signup.js'

const USER_URL = "http://localhost:3000/api/v1/users"

class App extends Component {

  state = {
    username: "",
    email: ""
  }


  logout = () => {
    localStorage.clear()
    window.location.href = "/"
  }


  setUserState = (username, email) => {
    this.setState({ username: username, email: email })
    console.log(username, email)
  }



  deleteUser = () => {
    fetch(`${USER_URL}/1}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `JWT ${localStorage.getItem("token")}`
      }
    })
    this.logout()
  }



  render() {
    return (
      <div>

        <BrowserRouter>

  

          {/* <Navbar deleteUser={this.deleteUser} username={this.state.username} email={this.state.email} logout={this.logout} /> */}
          <Switch>
            <Route exact path="/">
              <Welcome />
            </Route>



            {/* <Route exact path='/start' render={props => (
              <Start {...props} />
            )} /> */}

            <Route exact path='/login' render={props => (
              <Login {...props} getUserInfo={this.setUserState} />
            )} />

            <Route exact path='/signup' render={props => (
              <Signup {...props} getUserInfo={this.setUserState} />
            )} />


            {/* Auth0 */}
            {/* <Route exact path='/login'>
              <Login />
            </Route>

            <Route exact path='/signup'>
              <SignUp />
            </Route> */}

            <Route exact path="/mainmenu">
              <MainMenu />
            </Route>

            <Route exact path="/map">
              <Map deleteUser={this.deleteUser} username={this.state.username} email={this.state.email} logout={this.logout} />
            </Route>

            <Route exact path="/translate">
              <Translate />
            </Route>

            <Route exact path="/converse">
              <Converse />
            </Route>

          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;