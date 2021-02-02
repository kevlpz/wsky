import { useState, useEffect } from 'react'
import './App.scss';
import Home from './components/Home.js'
import Login from './components/Login.js'
import Register from './components/Register'
import CategoryPage from './components/CategoryPage'
import Navbar from './components/Navbar'
import { Route, Switch } from 'react-router-dom'
import ShoppingCart from './components/ShoppingCart'
import axios from 'axios'

function App() {

  const [cartItems, setCartItems] = useState([])

  // Get user Cart
  useEffect(() => {
      axios({
          method: 'get',
          url: 'http://localhost:5000/cart',
          withCredentials: true
      })
          .then(res => setCartItems(res.data))
          .catch(err => console.log('err: ', err))
  }, [])

  const addToCart = (id) => {
    console.log('id: ', id)
    axios({
        method: 'post',
        data: {productID: id},
        url: 'http://localhost:5000/cart',
        withCredentials: true
    })
    .then(res => console.log('res: ', res))
    .catch(err => console.log('err: ', err))
  }

  const [user, setUser] = useState()
  console.log('user: ', user)

  const logIn = user => {
    setUser(user)
  }

  const logOut = () => {
    setUser(undefined)
  }

  return (
    <div className="App">
      <Navbar user={user} logOut={logOut} />
      <div className="main-container">
        <Switch>
          <Route exact path="/" render={props => <Home {...props} addToCart={addToCart} />} />
          <Route path="/register" render={(props) => <Register {...props} logIn={logIn} />} />
          <Route path="/login" render={(props) => <Login {...props} logIn={logIn} />} />
          <Route path="/products/:category" component={CategoryPage} />
          <Route exact path="/products" component={CategoryPage} />
          <Route path="/cart" render={props => <ShoppingCart {...props} user={user} cartItems={cartItems} />} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
