import { Box, Grid, Stack, Typography, IconButton } from "@mui/material"
import { LeftMenu } from "../LeftMenu/LeftMenu"
import { Privacy } from "../Privacy"
import { WhotoFollow } from "../WhotoFollow"
import { Profile } from "../Profile/Profile"

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import VerifiedIcon from '@mui/icons-material/Verified';

import { useNavigate, useParams } from "react-router-dom"
import { useSelector} from 'react-redux'
import { useEffect, useState } from "react"
import { PortableSearchBox } from "../SearchBar/PortableSearchBox"


export const ProfileHome = () => {
    // const { user : { username}} = useSelector(store=>store)
    const { username } = useParams()
    const navigate = useNavigate()
    const [profile, setProfile] = useState({})
    useEffect(()=>{
        getProfile()
    },[username])
    async function getProfile(){
        const res1 = await fetch(`http://localhost:7000/profile/${username}`)
        const profile = await res1.json()
        setProfile(profile)
        // console.log(profile)
    }
    return (
        <>
            <Grid
                sx={{ margin: "auto", width: 1380 }}
            >
                <Stack direction={"row"}>
                    <LeftMenu />
                    <Stack>
                        <Stack direction="row" spacing={4} sx={{ position: "fixed", background: "white", zIndex: 5,height : 53 }}>
                            <Box>
                                <Stack
                                    sx={{ boxShadow: "none", maxHeight: 0 }}
                                >
                                    <Stack direction={"row"}
                                    sx={{ color: 'black', background: '#EEEEEE', paddingTop: 0.8, width: 664 }}>
                                        <Box mr={2} sx={{ fontWeight: 'bold', color: "black" }}>
                                            <IconButton size='large' sx={{ color: "black" }} onClick={()=>navigate('/home')}>
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
                                                    { profile?.posts?.length } Tweets
                                                </Typography>
                                            </Stack>
                                        </Typography>
                                    </Stack>
                                </Stack>
                            </Box>
                            <PortableSearchBox/>
                        </Stack>
                        <Stack direction={"row"} spacing={4} sx={{ marginTop: "65px" }}>
                            <Profile {...profile} />
                            <Stack >
                                <WhotoFollow />
                                <WhotoFollow />
                                <WhotoFollow />
                                <Box p={2}><Privacy /></Box>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
            </Grid>
        </>
    )
}