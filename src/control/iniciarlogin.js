import { Avatar, Button, CardMedia, Checkbox, FormControlLabel, Grid, ImageList, ImageListItem, Link, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
//material
import LockIcon from '@mui/icons-material/Lock';
import farol from '../assets/image/eeee.jpg'

export default function IniciarLogin() {
  const paperStyle={padding :50,height:'42vh',width:750, margin:"130px auto"}
  const  AvatarStyle={backgroundColor:'#4183C9'}
  const TextStyle={padding :1,height:'70vh',width:280, margin:"30px auto"}
  const  btnInicar={backgroundColor:'#4183C9'}
  return (
    <div>
      <Grid>
        <Paper elevation={10} style={paperStyle} sx={{ display: 'flex' }} >
          <Grid align='LEFT' sx={{ flex: '1 0 auto' }}> 
          
          <CardMedia
        component="img"
        sx={{ width: 451,  width:380 }}
        fullWidth
        image="https://i.pinimg.com/564x/b0/2f/51/b02f518b4d624628b940c1c2b28c64c7.jpg"
        alt="Live from space album cover"
      />
          </Grid>
          <br></br>

          <Grid style={TextStyle}>
          <Grid align='center'> 
          <Avatar style={AvatarStyle}>
            <LockIcon></LockIcon>
          </Avatar>
          <Typography variant="h4" color="#4183C9">Login</Typography>
          <br></br>
          </Grid>
          <TextField label='Username' placeholder='Enter username' fullWidth required />
          <p></p>
          <TextField label='Password' placeholder='Enter password' type='password' fullWidth required/>
          <p></p>
          <Button type='submit' color='primary' variant="contained" style={btnInicar} fullWidth>Sign in</Button>
          <p></p>
          <Typography >
          <Link href="#" color="#4183C9">¿Has olvidado tu contraseña?</Link>
          </Typography>
          <Typography >¿Tiene usted una cuenta ?<Link href="#" color="#3E8FE6"> Registrate</Link></Typography>
          </Grid>
          
        </Paper>
      </Grid>
    </div>
  )
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  }
];
