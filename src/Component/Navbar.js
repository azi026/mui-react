import React, { useState } from 'react';
import { AppBar, Box, Badge, InputBase, styled, Menu, MenuItem, Toolbar, Typography, Avatar } from '@mui/material'
import Pets from '@mui/icons-material/Pets';
import Mail from '@mui/icons-material/Mail';
import Notifications from '@mui/icons-material/Notifications';
const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
})
const Search = styled("div")(({ theme }) => ({
    backgroundColor: 'white',
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: '40%'
}));
const Icons = styled(Box)(({ theme }) => ({
    display: 'none',
    gap: 20,
    alignItems: 'center',
    [theme.breakpoints.up("sm")]: {
        display: 'flex',
        gap: 10,
        alignItems: 'center'
    }
}))
const UserBOX = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: 10,
    alignItems: 'center',
    [theme.breakpoints.up("sm")]: {
        display: 'none'
    }
}))
const Navbar = () => {
    const [open, setOpen] = useState(false)
    const [anchorEl, setAnchorEl] = React.useState(null);
    return (
        <AppBar position='sticky'>
            <StyledToolbar>
                <Typography variant='h6' sx={{ display: { xs: 'none', sm: 'block' } }}>
                    LAMA DEV
                </Typography>
                <Pets sx={{ display: { xs: 'block', sm: 'none' } }} />
                <Search><InputBase placeholder='Search...' /></Search>
                <Icons>
                    <Badge
                        badgeContent={2}
                        color="error">
                        <Mail />
                    </Badge>
                    <Badge badgeContent={2} color="error">
                        <Notifications />
                    </Badge>
                    <Avatar
                        sx={{ width: 30, height: 30 }}

                        src="http://kariran.net/common/libs/uploads/profiles/80_2637_hnotPN03hCnk.jpg"
                        onClick={e => setAnchorEl(e.currentTarget)}
                    />
                </Icons>
                <UserBOX onClick={e => setAnchorEl(e.currentTarget)}>
                    <Avatar
                        sx={{ width: 30, height: 30 }}
                        src="http://kariran.net/common/libs/uploads/profiles/80_2637_hnotPN03hCnk.jpg"

                    />
                    <Typography variant='span'>Eli</Typography>
                </UserBOX>
            </StyledToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                const open = {Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={e => setAnchorEl(null)}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
               
            >
                <MenuItem >Profile</MenuItem>
                <MenuItem >My account</MenuItem>
                <MenuItem >Logout</MenuItem>

            </Menu>
        </AppBar>
    );


}
export default Navbar;