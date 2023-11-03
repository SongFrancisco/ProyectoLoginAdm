import logo from './logo.svg';
import './App.css';
import Paper from '@mui/material/Paper';
import { Avatar, Grid, Typography } from '@mui/material';
import Login from './control/login';
import IniciarLogin from './control/iniciarlogin';
import StandardImageList from './control/login';



function App() {
  const HeaderStyle={margin:5}
  const paperStyle={ width:400, margin:"20px auto", padding:"20px" }
  return (
    <div className="App">
      
      <IniciarLogin/>
      
    </div>
  );
}

export default App;
