import { useState } from 'react'
import './App.scss';
import Home from './components/Home.js'
import Login from './components/Login.js'
import Register from './components/Register'
import CategoryPage from './components/CategoryPage'
import Navbar from './components/Navbar'
import { Route, Switch } from 'react-router-dom'

function App() {

  const [user, setUser] = useState()

  const logIn = user => {
    setUser(user)
  }

  return (
    <div className="App">
      <Navbar />
      <div className="main-container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/register" render={(props) => <Register {...props} logIn={logIn} />} />
          <Route path="/login" render={(props) => <Login {...props} logIn={logIn} />} />
          <Route path="/products/:category" component={CategoryPage} />
          <Route exact path="/products" component={CategoryPage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
