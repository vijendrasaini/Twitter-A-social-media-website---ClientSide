import { Box, Grid, Stack, Typography, IconButton } from "@mui/material"
import { LeftMenu } from "../../Components/LeftMenu/LeftMenu"
import { WhotoFollow } from "../../Components/WhoToFollowBox/WhotoFollow"

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import VerifiedIcon from '@mui/icons-material/Verified';

import { useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from "react"
import { PortableSearchBox } from "../../Components/SearchBar/PortableSearchBox"
import { BASE_URL } from "../../UniversalData/univeralData"
import { setLoading, toggleFollowingStatus } from "../../Redux/actionCreators"
import { Privacy } from "../../Components/Privacy";
import { Profile } from "../../Components/Profile/Profile";


export const ProfileHome = () => {

    const [profile, setProfile] = useState({})

    const { username: usernameB } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user: { username }, followingStatus, loading } = useSelector(store => store)

    useEffect(() => {
        getProfile()
    }, [usernameB])
    async function getProfile() {
        dispatch(setLoading({...loading, postLoading : true}))
        try {
            const res1 = await fetch(`${BASE_URL}/profile/${username}/${usernameB}`)
            const profile = await res1.json()
            setProfile(profile)
            dispatch(toggleFollowingStatus({
                follow: profile.status ? true : false,
                followers: profile.followers
            }))
        } catch (error) {
            console.log(error.message)
        }
        dispatch(setLoading({...loading, postLoading : false}))
    }
    useEffect(() => {

    }, [followingStatus])
    return (
        <>
            <Grid
                sx={{ margin: "auto", width: 1380 }}
            >
                <Stack direction={"row"}>
                    <LeftMenu />
                    <Stack>
                        <Stack direction="row" spacing={4} sx={{ position: "fixed", background: "white", zIndex: 5, height: 53 }}>
                            <Box>
                                <Stack
                                    sx={{ boxShadow: "none", maxHeight: 0 }}
                                >
                                    <Stack direction={"row"}
                                        sx={{ color: 'black', background: '#EEEEEE', paddingTop: 0.8, width: 664 }}>
                                        <Box mr={2} sx={{ fontWeight: 'bold', color: "black" }}>
                                            <IconButton size='large' sx={{ color: "black" }} onClick={() => navigate('/home')}>
                                                <ArrowBackIcon />
                                            </IconButton>
                                        </Box>
                                        <Typography variant="h6" component="div">
                                            <Stack>
                                                <Typography paragraph fontSize={20} sx={{ padding: "-20px", margin: "0px", fontWeight: "bold" }}
                                                >
                                                    {profile?.name}
                                                    <IconButton sx={{ paddingTop: "0px", marginTop: "-0.10px" }}>
                                                        <VerifiedIcon color='primary' />
                                                    </IconButton>
                                                </Typography>
                                                <Typography paragraph p={0} m={0} color='text.secondary' fontSize={13}
                                                >
                                                    {profile?.posts?.length} Tweets
                                                </Typography>
                                            </Stack>
                                        </Typography>
                                    </Stack>
                                </Stack>
                            </Box>
                            <PortableSearchBox />
                        </Stack>
                        <Stack direction={"row"} spacing={4} sx={{ marginTop: "65px" }}>
                            <Profile {...profile} />
                            <Stack >
                                <WhotoFollow />
                                <Privacy />
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
            </Grid>
        </>
    )
}