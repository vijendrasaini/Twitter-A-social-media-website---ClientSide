import { Box,Grid, Stack, Typography, IconButton } from "@mui/material"
import { LeftMenu } from "../LeftMenu/LeftMenu"
import { Post } from "../Post/Post"
import { PostingDashbord } from "../PostingDashbord/PostingDashbord"
import { Privacy } from "../Privacy"
import { WhotoFollow } from "../WhotoFollow"
import StarHalfIcon from '@mui/icons-material/StarHalf';
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import {PortableSearchBox } from "../SearchBar/PortableSearchBox"


export const Home = () => {

    const [interestedPosts, setInterestedPosts] = useState([])
    const { user : { username}} = useSelector(store => store)
    useEffect(()=>{
        getInterestedPost()
    },[])

    async function getInterestedPost(){
        const url = `http://localhost:7000/get-posts/interest/${username}`
        const response = await fetch(url)
        const posts = await response.json()
        setInterestedPosts(posts)
    }

    return (
        <>
            <Grid
                sx={{ margin: "auto", width: 1380 }}
            >
                <Stack direction={"row"}>
                    <LeftMenu />
                    <Stack>
                        <Stack direction="row" spacing={4} sx={{position:"fixed", background : "white", zIndex : 5}}>
                            <Stack
                                direction="row" justifyContent='space-between' p={1.5}
                                sx={{ width: 640, hight: 53, borderRight: "1px solid #F2F2F2" ,borderLeft: "1px solid #F2F2F2" }}
                            >
                                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Home</Typography>
                                <IconButton aria-label="share" color="primary">
                                    <StarHalfIcon />
                                </IconButton>
                            </Stack>
                            <PortableSearchBox/>
                        </Stack>
                        <Stack direction={"row"} spacing={4} 
                        sx={{marginTop:"65px"}}
                        >
                            <Box spacing={0} >
                                <PostingDashbord />
                                <Box >
                                    { !interestedPosts.length || !Array.isArray(interestedPosts) ? 
                                        <Box pt={5}>
                                            <h2>No posts , Follow people on twitter to see what's happening around the world</h2>
                                        </Box> : 
                                        interestedPosts.map(post=><Post key={post._id} {...post} />)
                                    }
                                </Box>
                            </Box>
                            <Stack 
                            >
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