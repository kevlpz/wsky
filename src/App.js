import './App.scss';
import Home from './components/Home.js'
import Login from './components/Login.js'
import Register from './components/Register'
import CategoryPage from './components/CategoryPage'
import Navbar from './components/Navbar'
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/products/:category" component={CategoryPage} />
          <Route exact path="/products" component={CategoryPage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
