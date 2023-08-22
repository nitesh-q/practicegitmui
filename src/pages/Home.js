import React from 'react'
import { Link } from 'react-router-dom';
import { Button, ThemeProvider, createTheme, Typography } from '@mui/material';
import BatteryCharging20Icon from '@mui/icons-material/BatteryCharging20';
import ButtonPractice from './ButtonPractice';
import TextFieldp from './TextFieldp';
import MuiSelect from './MuiSelect';
import Muiradiobutton from './Muiradiobutton';
import Muicheckbox from './Muicheckbox';
import Muiswitch from './Muiswitch';
import MuiBox from './MuiBox';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF5799',
    },
  },
});

const Home = () => {
  
 
  return (
    <div>
      <h1>This is the home page</h1>
      <Link to="create">Click to view our about page</Link>
      <Link to="contact">Click to view our contact page</Link>

      <ThemeProvider theme={theme}>

        <Button variant="contained" color="primary">
          Custom Themed Button
        </Button>
      </ThemeProvider>

      <Typography variant="subtitle1">Heading 1</Typography>

      <Button
      >Hii
      </Button>

      {/* <BatteryCharging20Icon />
      <ButtonPractice/>
      <TextFieldp/>
      <MuiSelect/>
      <Muiradiobutton/>
      <Muicheckbox/>
      <Muiswitch/> */}
      <MuiBox/>
    </div>
  )
}

export default Home