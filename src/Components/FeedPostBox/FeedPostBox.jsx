import { Box } from "@mui/material"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { BASE_URL } from "../../UniversalData/univeralData"
import { Post } from "../Post/Post"


export const FeedPostBox = () => {

    const [interestedPosts, setInterestedPosts] = useState([])
    const { user : { username}} = useSelector(store => store)
    useEffect(()=>{
        getInterestedPost()
    },[])

    async function getInterestedPost(){
        const url = `${BASE_URL}/get-posts/interest/${username}`
        const response = await fetch(url)
        const posts = await response.json()
        setInterestedPosts(posts)
    }
    return (
        <Box >
            {!interestedPosts.length || !Array.isArray(interestedPosts) ?
                <Box pt={5}>
                    <h2>No posts , Follow people on twitter to see what's happening around the world</h2>
                </Box> :
                interestedPosts.map(post => <Post key={post._id} {...post} />)
            }
        </Box>
    )
}