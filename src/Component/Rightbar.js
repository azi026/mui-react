import React from 'react';
import {Box,Typography,Avatar,AvatarGroup,ImageList,ImageListItem,List,ListItem,ListItemText,ListItemAvatar,Divider} from '@mui/material'
import { width } from '@mui/system';
const Rightbar = ()=>{
    return(
      <Box 
       flex={2} p={2} sx={{display:{xs:'none',sm:'block'}}}>
        <Box position='fixed' width={300}>
         <Typography variant='h6' fontWeight='100'>
           Online Friend
          </Typography>  
          <AvatarGroup max={9}>
            <Avatar alt="Remy Sharp" src="http://kariran.net/common/libs/uploads/profiles/48_7055_W_dGbTppZaj2.jpg" />
            <Avatar alt="Travis Howard" src="http://kariran.net/common/libs/uploads/profiles/48_24264_oQGVekwXZrcH.jpg" />
            <Avatar alt="Cindy Baker" src="http://kariran.net/common/libs/uploads/profiles/48_39811_erVwrj2J3uoD.jpg" />
            <Avatar alt="Agnes Walker" src="http://kariran.net/common/libs/uploads/profiles/48_47872_8D05QEvQQLLM.jpg" />
            <Avatar alt="Trevor Henderson" src="http://kariran.net/common/libs/uploads/profiles/48_85537_kFRQMYs68AsW.jpg" />
            <Avatar alt="Trevor Henderson" src="http://kariran.net/common/libs/uploads/profiles/48_118746_4YfetvDm6l20.jpg" />
            <Avatar alt="Trevor Henderson" src="" />
            <Avatar alt="Trevor Henderson" src="" />
            <Avatar alt="Trevor Henderson" src="" />
            <Avatar alt="Trevor Henderson" src="" />
          </AvatarGroup> 
          <Typography variant='h6' fontWeight={100} mt={2} mb={2}>
            Lasted qhotoes
          </Typography>
          <ImageList  cols={3} rowHeight={100} gap={5}>
          
          <ImageListItem >
          <img
          src="https://www.soorban.com/images/news/2021/09/1631690534_X1bG2.jpg"          
          alt=""          
          />
          </ImageListItem>
          <ImageListItem >
          <img
          src="https://www.soorban.com/images/news/2021/09/1631690534_X1bG2.jpg"          
          alt=""          
          />
          </ImageListItem>
          <ImageListItem >
          <img
          src="https://www.soorban.com/images/news/2021/09/1631690534_X1bG2.jpg"          
          alt=""          
          />
          </ImageListItem>
      
          </ImageList>
          <Typography variant='h6' fontWeight={100} mt={2} >
            Lasted Conversations
          </Typography>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
          </Box>
      </Box>  
    );
}
export default Rightbar;