import { IconButton, Stack, Box, Menu, MenuItem, Dialog } from "@mui/material"
import { Typography } from "@mui/material"
import { iconsArr } from "./menuIcon"
import { Button } from "@mui/material"
import Avatar from '@mui/material/Avatar';
import Fade from '@mui/material/Fade';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

export const LeftMenu = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [openDialog, setOpenDialog] = useState(false)

    const { user : {username, name, avatar} } = useSelector(store => store)
    const navigate = useNavigate()

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleDialogClose = () => setOpen(false)
    return (
        <div style={{ width: 340 }}>
            <Stack
                sx={{ height: "100vh", position: "fixed" }}
                justifyContent='space-between'
            >
                <Stack
                    spacing={1.2}
                >
                    <Stack
                        display={"inline-block"}
                    >
                        <IconButton sx={{ color: "#1D9BF0", height: 56, width: 56 }} >
                            <TwitterIcon sx={{ fontSize: 40 }} />
                        </IconButton>
                    </Stack>
                    {iconsArr.map(({ title, Icon, link }, index) => {
                        return <Stack
                            key={index}
                            direction="row"
                            sx={{
                                '&:hove': {
                                    backgroundColor: "disable",
                                    cursor: 'pointer'
                                }
                            }}
                        >
                            <Button variant="contained" size="large"
                                sx={{
                                    borderRadius: "99px",
                                    background: "white",
                                    fontWeight: "bold",
                                    fontSize: "18px",
                                    textTransform: "none",
                                    padding: "10px 40px 10px 12px",
                                    boxShadow: "none",
                                    color: "black",
                                    '&:hover': {
                                        background: 'rgb(231, 227, 227)',
                                        boxShadow: "none"
                                    }
                                }}
                                onClick={() => navigate(`${link}`)}
                            >
                                <Stack
                                    spacing={2.5}
                                    direction='row'
                                >
                                    <Stack
                                        justifyContent={"center"}
                                        alignItems="center"
                                    >
                                        {<Icon sx={{ fontSize: 30 }} />}
                                    </Stack>
                                    <Typography variant="h6" fontSize={22} sx={{ letterSpacing: "0.5px", color: "0F1419" }}>
                                        {title}
                                    </Typography>
                                </Stack>
                            </Button>
                        </Stack>
                    })}
                    <Stack>
                        <Button variant="contained" href="#contained-buttons" size="large"
                            sx={{
                                borderRadius: "99px",
                                background: "#1D9BF0",
                                fontWeight: "bold",
                                fontSize: "18px",
                                textTransform: "none",
                                padding: "15px 5px",
                                width: "250px"
                            }}
                        >
                            Tweet
                        </Button>
                    </Stack>
                </Stack>
                <Menu
                    id="fade-menu"
                    MenuListProps={{
                        'aria-labelledby': 'fade-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                >
                    <MenuItem onClick={() => {
                        handleClose()
                        setOpenDialog(true)
                    }} sx={{ paddingY: 2 }}>Log Out @{username}</MenuItem>
                </Menu>
                <Button
                    id="fade-button"
                    aria-controls={open ? 'fade-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    sx={{
                        borderRadius: "99px",
                        background: "white",
                        fontWeight: "bold",
                        fontSize: "18px",
                        textTransform: "none",
                        padding: "10px 40px 10px 12px",
                        boxShadow: "none",
                        color: "black",
                        width: '280px',
                        '&:hover': {
                            background: 'rgb(231, 227, 227)',
                            boxShadow: "none"
                        }
                    }}
                >
                    <Stack
                        direction={"row"}
                        alignItems={"center"}
                        sx={{ width: '280px', hight: "50px" }}
                    >
                        <Box
                            sx={{ marginRight: "10px" }}
                        >
                            <Avatar sx={{ hight: "50px" }} src={avatar} />
                        </Box>
                        <Stack sx={{ padding: "0px" }} flexGrow >
                            <Typography 
                            sx={{ 
                                fontWeight: "bold", 
                                fontSize: "17px", 
                                padding: "0px", 
                                margin: "0px" 
                                }} 
                                component={"span"}>
                                    {name}
                            </Typography>
                            <Typography variant="body2" 
                            sx={{ 
                                minWidth: "100px", 
                                padding: "0px", 
                                margin: "0px", 
                                maxWidth: "200px", 
                                overflow: "hidden" }} 
                            component={"span"}>
                                {username}
                            </Typography>
                        </Stack>
                        <MoreVertIcon />
                    </Stack>
                </Button>
                <Dialog open={openDialog} onClose={handleDialogClose} >
                    <Stack pt={2.5} width={290} px={5} >
                        <Stack alignItems="center">
                            <IconButton>
                                <TwitterIcon sx={{ fontSize: 48, color: "#1D9BF0" }} />
                            </IconButton>
                        </Stack>
                        <Stack >
                            <h2 style={{ marginBottom: -5, paddingBottom: 0, marginTop : 4 }}>Log out of Twitter?</h2>
                            <p style={{ color: "#536471", fontSize : 17, letterSpacing : -0.4 }}>You can always log back in at any time. If you just want to switch accounts, you can do that by adding an existing account. </p>
                        </Stack>
                        <Stack alignItems={"center"} mb={1}>
                            <Button
                                onClick={()=>{
                                    localStorage.removeItem('user')
                                    setOpenDialog(false)
                                    navigate('/')
                                }}
                                fullWidth
                                variant="contained"
                                sx={{
                                    mt: 2,
                                    mb: 2,
                                    borderRadius: "99px",
                                    boxShadow: "0 -1px 0 rgba(0, 0, 0, .04), 0 2px 4px rgba(0, 0, 0, .25)",
                                    fontSize: "16px",
                                    fontWeight: '600',
                                    textTransform: 'none',
                                    background: 'black',
                                    color: 'white',
                                    paddingY: "9px",
                                    '&:hover': {
                                        color: 'white',
                                        background: '#171717'
                                    }
                                }}
                            >
                                Logout
                            </Button>
                            <Button
                                fullWidth
                                variant="contained"
                                onClick={()=>setOpenDialog(false)}
                                sx={{
                                    mb : 4,
                                    borderRadius: "99px",
                                    fontSize: "16px",
                                    fontWeight: '600',
                                    textTransform: 'none',
                                    background: 'white',
                                    color: 'black',
                                    paddingY: "9px",
                                    boxShadow : "none",
                                    border: "1px solid #B0B3B8",
                                    '&:hover': {
                                        color: 'black',
                                        background : "#F2F2F2",
                                        boxShadow : "none"
                                    }
                                }}
                            >
                                Cancel
                            </Button>
                        </Stack>
                    </Stack>

                </Dialog>
            </Stack>
        </div>

    )
}