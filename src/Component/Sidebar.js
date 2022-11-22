import React from 'react';
import {Box,List,ListItem,ListItemButton,ListItemIcon,ListItemText,Switch} from '@mui/material'
import Home from '@mui/icons-material/Home';
import Person from '@mui/icons-material/Person';
import Pages from '@mui/icons-material/Pages';
import Group from '@mui/icons-material/Group';
import Storefron from '@mui/icons-material/Storefront';
import Settings from '@mui/icons-material/Settings';
import AccountBox from '@mui/icons-material/AccountBox';
import ModeNight from '@mui/icons-material/ModeNight';

const Sidebar = ({mode,setMode})=>{
    return (
    <Box 
    
     flex={1} 
     p={2} 
     sx={{display:{xs:'none',sm:'block'}}}
     >
      <Box position='fixed'>
         <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#Home'>
            <ListItemIcon>
              <Home/>
            </ListItemIcon>               
              <ListItemText primary="HomePage" />
            </ListItemButton>
          </ListItem>         
          <ListItem disablePadding>
            <ListItemButton component="a" href='#simple-list'>
            <ListItemIcon>
              <Pages/>
            </ListItemIcon>               
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>         
          <ListItem disablePadding>
            <ListItemButton component="a" href='#simple-list'>
            <ListItemIcon>
              <Group/>
            </ListItemIcon>               
              <ListItemText primary='Groups' />
            </ListItemButton>
          </ListItem>         
          <ListItem disablePadding>
            <ListItemButton component="a" href='#simple-list'>
            <ListItemIcon>
              <Storefron/>
            </ListItemIcon>               
              <ListItemText primary="MarketPlace" />
            </ListItemButton>
          </ListItem>         
          <ListItem disablePadding>
            <ListItemButton component="a" href='#simple-list'>
            <ListItemIcon>
              <Person/>
            </ListItemIcon>               
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>         
          <ListItem disablePadding>
            <ListItemButton component="a" href='#simple-list'>
            <ListItemIcon>
              <Settings/>
            </ListItemIcon>               
              <ListItemText primary="Setting" />
            </ListItemButton>
          </ListItem>         
          <ListItem disablePadding>
            <ListItemButton component="a" href='#simple-list'>
            <ListItemIcon>
              <AccountBox/>
            </ListItemIcon>               
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>         
          <ListItem disablePadding>
            <ListItemButton component="a" href='#simple-list'>
            <ListItemIcon>
              <ModeNight/>
            </ListItemIcon>               
            <Switch onChange={e=>setMode(mode==="light" ? "dark" :"light")}/>
            </ListItemButton>
          </ListItem>         
        </List>
        </Box>
     </Box>
    );
  
}
export default Sidebar;