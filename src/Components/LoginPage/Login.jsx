// import './loginPage.css'
import { Link, useNavigate } from 'react-router-dom'
import  axios from 'axios'
import { GoogleLogin } from 'react-google-login'
import { useState } from 'react';
import './login.css'

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TwitterIcon from '@mui/icons-material/Twitter';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { FormControl, IconButton, InputLabel, MenuItem, Select, Stack } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setUser } from '../../Redux/actionCreators';


export const Login = () => {

    const monthArr = ["January ", "February ", "March ", "April ", "May ", "June ", "July ", "August ", "September ", "October ", "November ", "December "]
    const yearArr = []
    for (let i = 2022; i >= 1887; i--)yearArr.push(i)
    const navigate = useNavigate()


    const dummyDate = {day: "",month: "",year: "", tokenId : ""}
    const [open, setOpen] = useState(false)
    const [date, setDate] = useState(dummyDate)
    const [ openGoogleAlert, setOpenGoogleAlert] = useState(false)
    const disptach = useDispatch()

    const handleDateChange = ({ target : {value, name}}) => setDate({ ...date, [name]: value })
    
    const handleDialogClose = () => setOpen(false)

    const responseGoogle = async (response) => {
        setDate({ ...date, tokenId : response.tokenId})
        const url = `http://localhost:7000/google/signin`
        const res = await axios.post(url, { tokenId : response.tokenId})
        if(res.data.status == 'failure')
            setOpenGoogleAlert(true)
        else{
            if(res.data.userExist == false)
                setOpen(true)
            else
                visitHome(res.data)
        }
    }
    const signInDate = async () => {
        const url = `http://localhost:7000/google/signin`
        const res = await axios.post(url, date )
        console.log(res.data)
        if(res.data.status == "failure")
            setOpenGoogleAlert(true)
        if(open)
            setOpen(false)
        visitHome(res.data)
    }
    function visitHome(user){
        localStorage.setItem('user',JSON.stringify(user))
        disptach(setUser(user))
        navigate('/home')  
    }
    const errorResponseGoogle = (error) => setOpenGoogleAlert(true)
    const handleGoogleAlert = ()=>setOpenGoogleAlert(false)
    return (
        <>
            <Stack sx={{ width: "100%" }}>
                <Stack direction="row">
                    <Grid sx={{ width: "54%", height: "100%" }}>
                        <div
                            className='poster'
                        >
                            <IconButton >
                                <TwitterIcon sx={{ width: "440px", height: "440px", color: "white" }} />
                            </IconButton>
                        </div>
                    </Grid>
                    <Grid>
                        <Box pt={4} pl={5}>
                            <IconButton>
                                <TwitterIcon sx={{
                                    color: "#1D9BF0",
                                    fontSize: "53px"
                                }} />
                            </IconButton>
                            <Typography variant='h2' fontWeight={"bold"} mt={8} fontSize={70}>
                                Happening now
                            </Typography>
                            <h1 style={{ fontSize: 45 }}>
                                Join Twitter today.
                            </h1>
                            <GoogleLogin
                                clientId="257505824421-o9l99qvh3d4nj20nm86k19vatjn9kbdh.apps.googleusercontent.com"
                                buttonText="Sign in with Google"
                                onSuccess={responseGoogle}
                                onFailure={errorResponseGoogle}
                                cookiePolicy={'single_host_origin'}
                                render={renderProps => (
                                    <button className='login-with-google-btn' onClick={renderProps.onClick} disabled={renderProps.disabled}>Sign in with Google</button>
                                )}
                            />
                            <Box>

                                <Typography xs={{ width: 300 }} pl={19}>
                                    Or
                                </Typography>
                            </Box>
                            <Box>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    onClick={responseGoogle}
                                    sx={{
                                        mt: 2,
                                        mb: 2,
                                        bgcolor: 'white',
                                        borderRadius: "99px",
                                        boxShadow: "0 -1px 0 rgba(0, 0, 0, .04), 0 2px 4px rgba(0, 0, 0, .25)",
                                        fontSize: "16px",
                                        fontWeight: '600',
                                        textTransform: 'none',
                                        background: '#1D9BF0',
                                        color: 'white',
                                        width: "340px",
                                        paddingY: "7px",
                                        '&:hover': {
                                            color: 'white',
                                            background: '#1D9BF0'
                                        }
                                    }}
                                >
                                    Sign up with phone or email
                                </Button>
                                <Box sx={{ width: "340px", fontSize: 14.8, marginTop: -1.6 }}>
                                    <small>
                                        By signing up, you agree to the <span style={{ color: "#1D9BF0" }}>Terms of Service</span> and <span style={{ color: "#1D9BF0" }}>Privacy Policy</span>, including <span style={{ color: "#1D9BF0" }}>Cookie Use</span>.
                                    </small>
                                </Box>
                            </Box>
                            <h3 style={{ marginTop: 70 }}>Already have an account?</h3>
                            <Box>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{
                                        mt: 1,
                                        mb: 2,
                                        bgcolor: 'white',
                                        borderRadius: "99px",
                                        boxShadow: "0 -1px 0 rgba(0, 0, 0, .04), 0 2px 4px rgba(0, 0, 0, .25)",
                                        fontSize: "16px",
                                        fontWeight: '600',
                                        textTransform: 'none',
                                        background: 'white',
                                        color: '#1D9BF0',
                                        width: "340px",
                                        paddingY: "7px",
                                        border: "1px solid #dadce0",
                                        boxShadow: "none",
                                        '&:hover': {
                                            color: '#1D9BF0',
                                            background: '#d2e3fc',
                                            boxShadow: "none",
                                        }
                                    }}
                                >
                                    Sign in
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                </Stack>
                <Box>
                    <Stack py={2} spacing={2}>
                        <Stack direction={"row"} justifyContent="space-evenly">
                            <Link style={{ fontSize: 14, color: "rgb(83 100 113)", textDecoration: "none", '&:hover': { textDecoration: "underline" } }} to="#">Help Center</Link>
                            <Link style={{ fontSize: 14, color: "rgb(83 100 113)", textDecoration: "none", '&:hover': { textDecoration: "underline" } }} to="#">Terms of Service</Link>
                            <Link style={{ fontSize: 14, color: "rgb(83 100 113)", textDecoration: "none", '&:hover': { textDecoration: "underline" } }} to="#">Privacy Policy</Link>
                            <Link style={{ fontSize: 14, color: "rgb(83 100 113)", textDecoration: "none", '&:hover': { textDecoration: "underline" } }} to="#">Cookie Policy</Link>
                            <Link style={{ fontSize: 14, color: "rgb(83 100 113)", textDecoration: "none", '&:hover': { textDecoration: "underline" } }} to="#">Accessibility</Link>
                            <Link style={{ fontSize: 14, color: "rgb(83 100 113)", textDecoration: "none", '&:hover': { textDecoration: "underline" } }} to="#">Ads info</Link>
                            <Link style={{ fontSize: 14, color: "rgb(83 100 113)", textDecoration: "none", '&:hover': { textDecoration: "underline" } }} to="#">Blog</Link>
                            <Link style={{ fontSize: 14, color: "rgb(83 100 113)", textDecoration: "none", '&:hover': { textDecoration: "underline" } }} to="#">Status</Link>
                            <Link style={{ fontSize: 14, color: "rgb(83 100 113)", textDecoration: "none", '&:hover': { textDecoration: "underline" } }} to="#">Careers</Link>
                            <Link style={{ fontSize: 14, color: "rgb(83 100 113)", textDecoration: "none", '&:hover': { textDecoration: "underline" } }} to="#">Brand Resources</Link>
                            <Link style={{ fontSize: 14, color: "rgb(83 100 113)", textDecoration: "none", '&:hover': { textDecoration: "underline" } }} to="#">Advertising</Link>
                            <Link style={{ fontSize: 14, color: "rgb(83 100 113)", textDecoration: "none", '&:hover': { textDecoration: "underline" } }} to="#">Marketing</Link>
                            <Link style={{ fontSize: 14, color: "rgb(83 100 113)", textDecoration: "none", '&:hover': { textDecoration: "underline" } }} to="#">Twitter for Business</Link>
                            <Link style={{ fontSize: 14, color: "rgb(83 100 113)", textDecoration: "none", '&:hover': { textDecoration: "underline" } }} to="#">Developers</Link>
                            <Link style={{ fontSize: 14, color: "rgb(83 100 113)", textDecoration: "none", '&:hover': { textDecoration: "underline" } }} to="#">Directory</Link>
                            <Link style={{ fontSize: 14, color: "rgb(83 100 113)", textDecoration: "none", '&:hover': { textDecoration: "underline" } }} to="#">Settings</Link>
                        </Stack>
                        <Stack alignItems={"center"} sx={{ color: "rgb(83 100 113)", fontSize: 14 }}>
                            © 2022 Twitter, Inc.
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
            <Dialog open={open} onClose={handleDialogClose}>
                <Stack pt={0.5} width={450} px={7}>
                    <Stack alignItems="center">
                        <IconButton>
                            <TwitterIcon sx={{ fontSize: 40, color: "#1D9BF0" }} />
                        </IconButton>
                    </Stack>
                    <Stack >
                        <h1 style={{ marginBottom: 0, paddingBottom: 0 }}>What's your birth date ?</h1>
                        <p style={{ color: "rgb(83 100 113)" }}>This won't the public.</p>
                    </Stack>
                    <Stack direction={"row"} spacing={1} mt={3.4}>
                        <Box sx={{ minWidth: 180 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Month</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={date.month}
                                    label="month"
                                    name="month"
                                    onChange={handleDateChange}
                                >
                                    {/* <Box sx={{ maxHeight: 230 }}> */}
                                    {monthArr.map((month, index) => <MenuItem sx={{ py: 0, m: 0 }} key={index} value={month}>{month}</MenuItem>)}
                                    {/* </Box> */}
                                </Select>
                            </FormControl>
                        </Box>
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth >
                                <InputLabel id="demo-simple-select-label">Day</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={date.day}
                                    label="day"
                                    name="day"
                                    onChange={handleDateChange}
                                    sx={{ maxHeight: 400, }}
                                >
                                    {/* <Box sx={{ maxHeight: 230 }}> */}
                                    {new Array(30).fill(1).map((day, index) => <MenuItem sx={{ py: 0, m: 0 }} key={index} value={index + 1}>{(index + 1)}</MenuItem>)}
                                    {/* </Box> */}
                                </Select>
                            </FormControl>
                        </Box>
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Year</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={date.year}
                                    label="year"
                                    name='year'
                                    onChange={handleDateChange}
                                >
                                    {/* <Box sx={{ maxHeight: 230 }}> */}
                                    {yearArr.map((year, index) => <MenuItem sx={{ py: 0, m: 0 }} key={index} value={year}>{year}</MenuItem>)}
                                    {/* </Box> */}
                                </Select>
                            </FormControl>
                        </Box>
                    </Stack>
                    <Stack alignItems={"center"} mt={30} mb={1}>
                        <Button
                            // type="submit"
                            fullWidth
                            variant="contained"
                            disabled={date.day != "" && date.month != "" && date.year != "" ? false : true}
                            onClick={signInDate}
                            sx={{
                                mt: 2,
                                mb: 2,
                                bgcolor: 'white',
                                borderRadius: "99px",
                                boxShadow: "0 -1px 0 rgba(0, 0, 0, .04), 0 2px 4px rgba(0, 0, 0, .25)",
                                fontSize: "16px",
                                fontWeight: '600',
                                textTransform: 'none',
                                background: '#1D9BF0',
                                color: 'white',
                                width: "370px",
                                paddingY: "9px",
                                '&:hover': {
                                    color: 'white',
                                    background: '#1D9BF0'
                                }
                            }}
                        >
                            Sign up
                        </Button>
                    </Stack>
                </Stack>

            </Dialog>
            <Dialog
                open={openGoogleAlert}
                onClose={handleGoogleAlert}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Twitter says"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Something bad happened. <br /> Please login again.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button contained color='primary' onClick={handleGoogleAlert}>Ok</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
