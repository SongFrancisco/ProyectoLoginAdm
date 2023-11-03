import { Avatar, Button, Checkbox, FormControlLabel, Grid, Link, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
//material
import LockIcon from '@mui/icons-material/Lock';

export default function IniciarLogin() {
  const paperStyle={padding :40,height:'50vh',width:280, margin:"100px auto"}
  const  AvatarStyle={backgroundColor:'#4183C9'}
  const TextStyle={padding :1,height:'70vh',width:280, margin:"30px auto"}
  const  btnInicar={backgroundColor:'#4183C9'}
  return (
    <div>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align='center'> 
          <Avatar style={AvatarStyle}>
            <LockIcon></LockIcon>
          </Avatar>
          <Typography variant="h4" color="primary">Login</Typography>
          </Grid>
          <br></br>
          <Grid style={TextStyle}>
          <TextField label='Username' placeholder='Enter username' fullWidth required />
          <p></p>
          <TextField label='Password' placeholder='Enter password' type='password' fullWidth required/>
          <p></p>
          <Button type='submit' color='primary' variant="contained" style={btnInicar} fullWidth>Sign in</Button>
          <p></p>
          <Typography >
          <Link href="#" >¿Has olvidado tu contraseña?</Link>
          </Typography>
          <Typography >¿Tiene usted una cuenta ?<Link href="#" > Registrate</Link></Typography>
          </Grid>
          
        </Paper>
      </Grid>
    </div>
  )
}
