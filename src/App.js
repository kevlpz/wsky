import './App.scss';
import Home from './components/Home.js'
import Login from './components/Login.js'
import Register from './components/Register'

function App() {
  return (
    <div className="App">
      <div className="main-container">
        {/* <Home /> */}
        <Login />
        {/* <Register /> */}
      </div>
    </div>
  );
}

export default App;
