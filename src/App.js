import './App.scss';
import Home from './components/Home.js'
import Login from './components/Login.js'
import Register from './components/Register'
import CategoryPage from './components/CategoryPage'

function App() {
  return (
    <div className="App">
      <div className="main-container">
        {/* <Home /> */}
        {/* <Login /> */}
        {/* <Register /> */}
        <CategoryPage category="2" />
      </div>
    </div>
  );
}

export default App;
