import LoginPage from './Components/LoginPage';
import Afterlogin from './Components/Afterlogin';
import './App.css';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <div>
      <Outlet></Outlet>
    </div>
  )
}

export default App;
