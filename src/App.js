import './index.css';
import Login from './components/Login.js'
import Profile from './components/Profile.js'
import ChangeColor from './components/ChangeColor.js'

function App() {
  return (
    <div className="App">
      <Profile />
      <Login />
      <ChangeColor />
    </div>
  );
}

export default App;
