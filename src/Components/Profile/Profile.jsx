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
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Post } from '../Post/Post';
import { BASE_URL } from '../../UniversalData/univeralData';
import { toggleFollowingStatus } from '../../Redux/actionCreators';
import axios from 'axios';
import { UnFollowToggleBtn } from '../Buttons/UnFollowToggleBtn';
import { FollowBtn } from '../Buttons/FollowBtn';




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
function normalCase(string) {
    let arr = string.split(" ")
    let newArr = arr.map(name => name[0].toUpperCase() + name.slice(1).toLowerCase())
    return newArr.join(" ")
}

export const Profile = ({ name, username: usernameB, avatar, joined, followers, following, posts, status }) => {

    // const initialText = "Follwing"
    // const [buttonText, setButtonText] = useState(initialText)
    const [value, setValue] = useState(0);
    const [relevantData, setRelevantData] = useState([]);
    const [allPosts, setAllPosts] = useState([])
    const [likedPosts, setLikedPosts] = useState([])
    // const [followingStatus,toggleFollowingStatus] = 

    const { user: { username }, followingStatus } = useSelector(store => store)
    const dispatch = useDispatch()
    const theme = useTheme();


    async function startFollowing() {
        const url = `${BASE_URL}/follow/${username}/${usernameB}`
        const response = await fetch(url, {
            method: "POST"
        })
        const res = await response.json()
        dispatch(toggleFollowingStatus({
            follow: true,
            followers: followingStatus.followers + 1
        }))
    }
    async function doUnfollow() {
        const url = `${BASE_URL}/follow/${username}/${usernameB}`
        const response = await fetch(url, {
            method: "DELETE"
        })
        const res = await response.json()
        dispatch(toggleFollowingStatus({
            follow: false,
            followers: followingStatus.followers - 1
        }))
    }
    useEffect(() => {
        if (value == 0)
            setRelevantData([1, "first"])
        else if (value == 1)
            setRelevantData([2, "second"])
        else if (value == 2)
            setRelevantData([3, "third"])
        else {
            setRelevantData([4, "forth"])
            fetchLikedPosts()
        }


    }, [value])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    async function fetchLikedPosts() {
        try {
            const url = `${BASE_URL}/create-post/${username}`
            const response = await axios.get(url)
            setLikedPosts(response.data.likedPosts)
        } catch (error) {
            console.log(error.message)
        }

    }
    return (
        <div style={{ width: 664 }}>
            <Box style={{ marginTop: -6, width: 664, maxHight: "300px", boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 2px 0px' }} spacing={4} >
                <Box sx={{ width: "664px", background: '#CFD9DE', height: 220 }}>
                    {/* <img src={"https://pbs.twimg.com/profile_banners/44196397/1576183471/1500x500"} alt="Background Image" width={664} height={220} /> */}
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
                                {
                                    followingStatus.follow ?
                                        <>
                                            <IconButton sx={{ border: "1px solid #dfe3e4" }}>
                                                <NotificationsNoneIcon />
                                            </IconButton>
                                            <UnFollowToggleBtn doUnfollow={doUnfollow} />
                                        </>
                                        :
                                        <FollowBtn startFollowing={startFollowing} />
                                }
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
                                    {username == usernameB ? followers : followingStatus?.followers}
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
                        (username == usernameB ? <h1>Start Posting tweets on twitter world.</h1> : <h1>No posts from {normalCase(name)}</h1>)
                    }
                    {posts?.map(post => <Post key={post._id} {...post} />)}
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <h1>No Tweets and replies</h1>
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    <Stack
                        sx={{ width: "100%" }}
                        direction="row"
                        justifyContent={"center"}
                    >
                        <div>
                            <img src="https://abs.twimg.com/sticky/illustrations/empty-states/masked-doll-head-with-camera-800x400.v1.png" alt="" height={200} />
                            <h1 style={{ padding: 0, margin: 0 }}>Lights, camera … </h1>
                            <h1 style={{ padding: 0, margin: 0 }}>attachments!</h1>
                            <p>
                                When you send Tweets with photos or videos in <br /> them, it will show up here.
                            </p>
                        </div>
                    </Stack>
                </TabPanel>
                <TabPanel value={value} index={3} dir={theme.direction}>
                    {
                        likedPosts.length ?
                            likedPosts.map(post => <Post key={post._id} {...post} />)
                            : <Stack
                                sx={{ width: "100%" }}
                                direction="row"
                                justifyContent={"center"}
                            >
                                <div style={{ width: 380 }}>
                                    <h1 style={{ marginBottom: 0 }}>You don't have any likes yet</h1>
                                    <p>
                                        Tap the heart on any Tweet to show it some love. When you do, it'll show up here.
                                    </p>
                                </div>
                            </Stack>
                    }

                </TabPanel>
            </Box>
        </div>
    )
}