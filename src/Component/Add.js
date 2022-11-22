import {Fab,Tooltip,Box,Modal, Typography,Avatar,TextField,Stack,ButtonGroup,Button} from '@mui/material';
import {Add as AddIcon} from '@mui/icons-material'
import{useState} from 'react';
import styled from '@emotion/styled';
import EmojiEmotions from '@mui/icons-material/EmojiEmotions';
import VideoCameraBack from '@mui/icons-material/VideoCameraBack';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Image from '@mui/icons-material/Image';
import DateRange from '@mui/icons-material/DateRange';
const StyleModal=styled(Modal)({
    display:'flex',
    alignItems:'center',
    justifyContent:'center'

})
const UserBox=styled(Box)({

    display:'flex',
    alignItems:'center',
    gap:'10px',
    marginBottom:'20px'
})

const Add=()=>{
    const[open,setOpen]=useState(false)
    return(
    <>
        <Tooltip  onClick={e=>setOpen(true)}
        title="Add"
         sx={{
            position:"fixed" ,
             bottom:20 ,
              left:{xs:'calc(50% - 25px)',md:30 }}}>
            <Fab color="primary" aria-label="add">
            <AddIcon />
            </Fab>
        </Tooltip>      
      <StyleModal
        open={open}
        onClose={e=>setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
          <Typography variant='h6' color='gray' align='center'>
            Create Post
          </Typography>
          <UserBox>
             <Avatar
             src="http://kariran.net/common/libs/uploads/profiles/48_7055_W_dGbTppZaj2.jpg"
             sx={{width:'30',height:'30'}}
             />
             <Typography fontWeight={500} variant='sapn'>Jhon Doe</Typography>
          </UserBox>
          <TextField
          sx={{width:'100%'}}
          id="standard-multiline-static"        
          multiline
          rows={3}
          defaultValue="What's on yoor mind"
          variant="standard"
        />
        <Stack direction='row' gap={1} mt={2}  mp={3}>
          <EmojiEmotions color='primary'/>
          <Image color='secondary'/>
          <VideoCameraBack color='success'/>
          <PersonAdd color='error'/>
        </Stack>
        <ButtonGroup 
        fullWidth
        variant="contained" 
        aria-label="outlined primary button group"
        >
          <Button>Post</Button>
          <Button sx={{width:'100px'}}>
            <DateRange/>
            </Button>       
        </ButtonGroup>
        </Box>
      </StyleModal>
    </>
    );
}
export default Add;