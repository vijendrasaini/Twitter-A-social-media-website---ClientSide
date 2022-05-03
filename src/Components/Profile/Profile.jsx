import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import { Avatar, Stack } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Post } from '../Post/Post';
import { BASE_URL } from '../../UniversalData/univeralData';




function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`action-tabpanel-${index}`}
            aria-labelledby={`action-tab-${index}`}
            {...other}
        >
            {value === index && <Box>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `action-tab-${index}`,
        'aria-controls': `action-tabpanel-${index}`,
    };
}


export const Profile = ({ name, username: usernameB, avatar, joined, followers, following, posts }) => {
    const { user: { username } } = useSelector(store => store)
    const initialText = "Follwing"
    const [buttonText, setButtonText] = useState(initialText)

    const theme = useTheme();
    const [value, setValue] = useState(0);
    const [relevantData, setRelevantData] = useState([]);
    const [allPosts, setAllPosts] = useState([])

    useEffect(() => {
        if (value == 0)
            setRelevantData([1, "first"])
        else if (value == 1)
            setRelevantData([2, "second"])
        else if (value == 2)
            setRelevantData([3, "third"])
        else
            setRelevantData([4, "forth"])


    }, [value])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    // useEffect(() => {
    //     getPost()
    // }, [])
    // async function getPost() {
    //     const response = await fetch(`${BASE_URL}/get-posts/${username}`)
    //     const posts = await response.json()
    //     setAllPosts(posts)
    // }
    async function followOrUnfollow() {
        const url = `${BASE_URL}/follow/${username}/${usernameB}`
        const response = await fetch(url, {
            method: "POST"
        })
        const result = await response.json()
        console.log({ result })
        // console.log({ username, usernameB})
    }
    return (
        <div style={{ width: 664 }}>
            <Box style={{ width: 664, maxHight: "300px", boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 2px 0px' }} spacing={4} >
                <Box sx={{ width: "664px" }}>
                    <img src={"https://pbs.twimg.com/profile_banners/44196397/1576183471/1500x500"} alt="Background Image" width={664} height={199} />
                </Box>
                <Box
                    p={2}
                >
                    <Stack
                        direction={"row"}
                        justifyContent="space-between"
                    >
                        <Box sx={{ marginTop: "-103px" }}>
                            <Avatar src={avatar} sx={{ border: "5px solid white", width: "140.5px", height: "140.5px" }} />
                        </Box>
                        {(username != usernameB) ?
                            <Stack
                                direction={"row"}
                                spacing={1}
                                mt={1}
                                sx={{ minwidth: '190px', height: "42px" }}
                            >
                                <IconButton sx={{ border: "1px solid #dfe3e4" }}>
                                    <MoreHorizIcon />
                                </IconButton>
                                <IconButton sx={{ border: "1px solid #dfe3e4" }}>
                                    <NotificationsNoneIcon />
                                </IconButton>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    sx={{
                                        bgcolor: 'white',
                                        color: 'black',
                                        borderRadius: "99px",
                                        fontWeight: '600',
                                        textTransform: 'none',
                                        boxShadow: "none",
                                        border: "1px solid #dfe3e4",
                                        width: '130px',
                                        fontSize: "16px",
                                        '&:hover':
                                        {
                                            background: 'white',
                                            color: 'red',
                                            boxShadow: "none",
                                            borderColor: "red"
                                        }
                                    }}
                                    onMouseOver={() => setButtonText('unfollow')}
                                    onMouseLeave={() => setButtonText(initialText)}
                                    onClick={followOrUnfollow}
                                >{buttonText}
                                </Button>
                            </Stack> :
                            <Button
                                fullWidth
                                variant="contained"
                                sx={{
                                    bgcolor: 'white',
                                    color: 'black',
                                    borderRadius: "99px",
                                    fontWeight: '600',
                                    textTransform: 'none',
                                    boxShadow: "none",
                                    border: "1px solid #dfe3e4",
                                    width: '130px',
                                    fontSize: "16px",
                                    '&:hover':
                                    {
                                        background: '#dfe3e4',
                                        boxShadow: "none"
                                    }
                                }}
                                // onClick={editProfile}
                            >Edit profile
                            </Button>
                        }

                    </Stack>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Stack
                            spacing={1}
                        >
                            <Stack>
                                <Typography paragraph fontSize={20} sx={{ padding: "-20px", margin: "0px", fontWeight: "bold" }}
                                >
                                    {name}
                                    <IconButton sx={{ paddingTop: "0px", marginTop: "-0.10px" }}>
                                        <VerifiedIcon color='primary' />
                                    </IconButton>
                                </Typography>
                                <Typography paragraph p={0} m={0} color='text.secondary'
                                >
                                    {usernameB}
                                </Typography>
                            </Stack>
                            <Typography paragraph p={0} m={0} color='#536471'
                            >
                                <IconButton sx={{ marginLeft: -1.5 }}>
                                    <CalendarMonthIcon />
                                </IconButton>
                                Joined {joined}
                            </Typography>
                            <Stack
                                direction={"row"}
                            // spacing={1}
                            >
                                <Typography paragraph p={0} m={0} sx={{ fontSize: 16, fontWeight: "bolder", marginRight: 1 }}
                                >
                                    {following}
                                </Typography>
                                <Typography paragraph p={0} m={0} component="p" sx={{ color: '#536471', fontSize: 16, letterSpacing: 0.5 }}
                                >
                                    {"Following"}
                                </Typography>
                                <Typography paragraph p={0} m={0} sx={{ fontSize: 16, fontWeight: "bolder", marginRight: 1, marginLeft: 2 }}
                                >
                                    {followers}
                                </Typography>
                                <Typography paragraph p={0} m={0} component="p" sx={{ color: '#536471', fontSize: 16, letterSpacing: 0.5 }}
                                >
                                    {"Followers"}
                                </Typography>
                            </Stack>
                            <Typography paragraph p={0} m={0} component="p" fontSize={13} sx={{ letterSpacing: 0.5 }} color='#536471'
                            >
                                {"Not followed by anyone you’re following"}
                            </Typography>
                        </Stack>
                    </Typography>
                </Box>
                <Box sx={{ position: 'relative' }}>
                    <AppBar position="static" color="default" sx={{
                        boxShadow: "none",
                        background: "white"
                    }}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                            variant="fullWidth"
                            aria-label="action tabs example"
                        >
                            <Tab sx={{
                                fontWeight: "bold",
                                textTransform: "none",
                                fontSize: 16,
                                color: "black",
                                '&:hover': {
                                    background: "#E0E0E0"
                                }
                            }} {...a11yProps(0)} label="Tweets" />
                            <Tab sx={{
                                fontWeight: "bold",
                                textTransform: "none",
                                fontSize: 16,
                                color: "black",
                                '&:hover': {
                                    background: "#E0E0E0"
                                }
                            }} {...a11yProps(1)} label="Tweets & replies" />
                            <Tab sx={{
                                fontWeight: "bold",
                                textTransform: "none",
                                fontSize: 16,
                                color: "black",
                                '&:hover': {
                                    background: "#E0E0E0"
                                }
                            }} {...a11yProps(2)} label="Media" />
                            <Tab sx={{
                                fontWeight: "bold",
                                textTransform: "none",
                                fontSize: 16,
                                color: "black",
                                '&:hover': {
                                    background: "#E0E0E0"
                                }
                            }} {...a11yProps(3)} label="Likes" />
                        </Tabs>
                    </AppBar>

                </Box>
            </Box>
            <Box
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    {posts?.length == 0 && 
                    <h1>Start Posting tweets on twitter world.</h1>
                    }
                    {posts?.map(post => <Post key={post._id} {...post} />)}
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <h1>No Tweets and replies</h1>
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    <h1>No Media</h1>
                </TabPanel>
                <TabPanel value={value} index={3} dir={theme.direction}>
                    <h1>You don't have any post liked.</h1>
                </TabPanel>
            </Box>
        </div>
    )
}