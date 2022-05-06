import './pd.css'
import { useDispatch, useSelector } from 'react-redux'

import { Avatar, CircularProgress, Dialog, IconButton, LinearProgress } from "@mui/material";
import { Box } from "@mui/material"
import { Button, Stack } from '@mui/material'
import InputBase from '@mui/material/InputBase';


import GifBoxIcon from '@mui/icons-material/GifBox';
import PollIcon from '@mui/icons-material/Poll';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ScheduleIcon from '@mui/icons-material/Schedule';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from "react-router-dom";
import { useState } from "react";
import { BASE_URL } from '../../UniversalData/univeralData';
import axios from 'axios'
import { setLoading } from '../../Redux/actionCreators';



export const PostingDashbord = () => {

    const [tweetText, setTweetText] = useState("")
    const [previewSource, setPreviewSource] = useState(null)
    const dispatch = useDispatch()

    const { user: { username, avatar, name }, loading } = useSelector(store => store)

    const handleFileInputChange = (e) => {
        const file = e.target.files[0]
        previewFile(file)
    }
    const previewFile = (file) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = () => {
            setPreviewSource(reader.result)
        }
    }
    const postATweet = async () => {
        const body = { username, name, avatar }
        if (tweetText != "")
            body.title = tweetText
        if (previewSource)
            body.image = previewSource
        const url = `${BASE_URL}/create-post`
        dispatch(setLoading(true))
        try {
            setPreviewSource(null)
            setTweetText("")
            const response = await axios.post(url, body)
        } catch (error) {
            console.log(error.message)
        }
        dispatch(setLoading(false))
        window.location.reload()
    }
    return (
        <Box
            sx={{ width: 640, margin: 'auto', border: "1px solid #F2F2F2", borderTop: "1px solid transparent", padding: 1.5 }}
        >
            <Stack

                spacing={3}
            >

                <Stack
                    direction="row"
                    spacing={3}
                >
                    <Link to={`/${username}`}>
                        <Avatar
                            sx={{ width: 56, height: 56 }}
                            aria-label="profile-image"
                            alt="User-Profile-Image"
                            src={avatar}
                        />
                    </Link>
                    <Stack
                        justifyContent={"center"}
                        sx={{ width: "100%" }}
                    >
                        <InputBase
                            onChange={e => setTweetText(e.target.value)}
                            value={tweetText}
                            placeholder="What's happening?"
                            multiline
                            sx={{ color: 'black', fontSize: 20 }}
                        />
                    </Stack>
                </Stack>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    sx={{ paddingLeft: '70px' }}
                >
                    <Stack direction="row" >
                        <span>
                            <label htmlFor="fileInput">
                                <img src="https://cdn1.iconfinder.com/data/icons/camera-and-photography-3/64/Gallery-512.png" alt="upload post" className="galleryPost" />
                                <input type="file" id="fileInput" onChange={handleFileInputChange} style={{ display: "none" }} />
                            </label>
                        </span>
                        <IconButton aria-label="share" color="primary">
                            <GifBoxIcon />
                        </IconButton>
                        <IconButton aria-label="share" color="primary">
                            <PollIcon />
                        </IconButton>
                        <IconButton aria-label="share" color="primary">
                            <EmojiEmotionsIcon />
                        </IconButton>
                        <IconButton aria-label="share" color="primary">
                            <ScheduleIcon />
                        </IconButton>
                        <IconButton aria-label="share" color="primary">
                            <LocationOnIcon />
                        </IconButton>
                    </Stack>
                    <Button onClick={postATweet} disabled={(tweetText == "" && (!previewSource)) ? true : false} variant="contained" sx={{ fontSize: 18, borderRadius: "99px", fontWeight: "bold", textTransform: 'none' }}>Tweet</Button>
                </Stack>
            </Stack>
            {previewSource && (
                <div className='preview-container' >
                    <img src={previewSource} alt="file to be uploaded." className='preview' />
                </div>
            )}
            {/* <Dialog
                open={loading}
            >
            </Dialog> */}
        </Box>
    )
}