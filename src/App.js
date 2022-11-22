// import {Button,styled,Typography} from '@mui/material'
// import {Add,Settings} from '@mui/icons-material';
// const BlueButton=styled(Button)(({theme})=>({
//   backgroundColor:"skyblue",
//         color:'#888',    
//         margin:5,
//         "&:hover":{
//           backgroundColor:'lightblue'
//         },
//         "&:disabled":{
//           backgroundColor:"gray",
//           color:'white'
//         }
// }))
import {Box,Stack,createTheme, ThemeProvider} from '@mui/material';
import Sidebar from './Component/Sidebar'
import Feed from './Component/Feed'
import Rightbar from './Component/Rightbar'
import Navbar from './Component/Navbar';
import Add from './Component/Add'
import { useState } from 'react';

function App() {
  const [mode,setMode]=useState('light')
  const darkTheme=createTheme({
    palette:{
      mode:mode
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
 <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar/>
      <Stack direction='row'spacing={2} justifyContent='space-between'>
        <Sidebar setMode={setMode} mode={mode}/>
        <Feed/>
        <Rightbar/>              
      </Stack>
      <Add/> 
    
      {/* <Button 
      variant="text"
      >
        Text
      </Button>
      <Button 
      startIcon={<Settings/>} 
      variant="contained" color='secondary' size="medium"
      >
        Settings
      </Button>
      <Button 
      color='success'
       startIcon={<Add/>} 
      variant="outlined" 
      disable
      >
        Add New Post
      </Button>
      
       <Typography variant="h1" component="p">
      it use h1 style but it's p tag
      </Typography>;
      <BlueButton>My Button</BlueButton>
      <BlueButton>another Botton</BlueButton> */}
 
    </Box>
    </ThemeProvider>
   
  );
}

export default App;
