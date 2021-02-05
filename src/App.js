import { useState, useEffect } from 'react'
import './App.scss';
import Home from './components/Home.js'
import Login from './components/Login.js'
import Register from './components/Register'
import CategoryPage from './components/CategoryPage'
import Navbar from './components/Navbar'
import { Route, Switch, Redirect } from 'react-router-dom'
import ShoppingCart from './components/ShoppingCart'
import axios from 'axios'

function App(props) {

  const [cartItems, setCartItems] = useState([])
  const [cartTotal, setCartTotal] = useState(0)
  const [cartChange, setCartChange] = useState(false)
  const [cookie, setCookie] = useState(document.cookie)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  console.log('isLoggedIn: ', isLoggedIn)
  // console.log('cookie: ', browser.cookies.get({name: 'dram'}))
  console.log('cookie: ', document.cookie)
  console.log('props: ', props)

  // Get user Cart
  useEffect(() => {
    axios({
        method: 'get',
        url: 'https://infinite-refuge-27306.herokuapp.com/cart',
        withCredentials: true
    })
        .then(res => {
          setCartItems(res.data)
          let total = 0
          res.data.forEach(item => {
            console.log('item: ', item)
            total += item.price * item.quantity
          })
          setCartTotal(total.toFixed(2))
          setCartChange(false)
        })
        .catch(err => console.log('err: ', err))

    axios({
      method: 'get',
      url: 'https://infinite-refuge-27306.herokuapp.com/users',
      withCredentials: true
    })
    .then(res => {
      console.log('res: ', res)
      if(res.data.email) {
        setIsLoggedIn(true)
      } else {
        setIsLoggedIn(false)
      }
    })
    .catch(err => console.log('err: ', err))
  }, [cartChange])

  const addToCart = (id) => {
    axios({
      method: 'post',
      data: {productID: id},
      url: 'https://infinite-refuge-27306.herokuapp.com/cart',
      withCredentials: true
    })
    .then(() => setCartChange(true))
    .catch(err => console.log('err: ', err))
  }

  const removeFromCart = (productID) => {
    axios({
        url: `https://infinite-refuge-27306.herokuapp.com/${productID}`,
        method: 'delete',
        withCredentials: true
    })
    .then(() => setCartChange(true))
    .catch(err => console.log('err: ', err))
  }

  const handleQuantityChange = (productID, quantity) => {
    const data = {productID: productID, quantity: quantity}

    axios({
        data: data,
        method: 'put',
        url: 'https://infinite-refuge-27306.herokuapp.com/cart',
        withCredentials: true
    })
        .then(res => {
            setCartChange(true)
        })
        .catch(err => {
            console.log('err: ', err)
        })
  }

  return (
    <div className="App">
      <Navbar user={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <div className="main-container">
        <Switch>
          <Route exact path="/" render={props => <Home {...props} isLoggedIn={isLoggedIn} addToCart={addToCart} setCartChange={setCartChange} />} />
          <Route path="/register" render={(props) => <Register {...props} />} />
          <Route path="/login" render={(props) => <Login {...props} setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/products/:category" render={props => <CategoryPage {...props} addToCart={addToCart} />} />
          <Route exact path="/products" render={props => <CategoryPage {...props} addToCart={addToCart} />} />
          <Route path="/cart" render={props => {
            return <ShoppingCart {...props} cartTotal={cartTotal} cartItems={cartItems} handleQuantityChange={handleQuantityChange} removeFromCart={removeFromCart} />
          }} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
