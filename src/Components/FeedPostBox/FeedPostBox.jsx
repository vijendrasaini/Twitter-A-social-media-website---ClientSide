import { Box } from "@mui/material"
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { BASE_URL } from "../../UniversalData/univeralData"
import { Post } from "../Post/Post"
import { setLoading } from "../../Redux/actionCreators"
import { Loading } from "../Loading/Loading"
import axios from 'axios'


export const FeedPostBox = () => {

    const [interestedPosts, setInterestedPosts] = useState([])
    const { user : { username}, loading} = useSelector(store => store)
    const dispatch = useDispatch()
    useEffect(()=>{
        getInterestedPost()
    },[])

    async function getInterestedPost(){
        const url = `${BASE_URL}/get-posts/interest/${username}`
        dispatch(setLoading({ ...loading, postLoading : true }))
        try {
            const response = await axios.get(url)
            const posts = response.data
            setInterestedPosts(posts)
        } catch (error) {
            console.log({ message : error.message})
        }
        dispatch(setLoading({ ...loading, postLoading : false }))
    }
    return loading?.postLoading? <Loading/> : (
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