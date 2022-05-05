import { Avatar, Box, CardHeader, IconButton, Typography, Stack, Button, Link, Grid } from "@mui/material"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useEffect, useState } from "react";
import { BASE_URL } from "../UniversalData/univeralData";
import { SmallFollowCard } from "./Cards/SmallFollowCard";



export const WhotoFollow = () => {

    const [whoToFollowArr, setWhoToFollowArr] = useState([])
    useEffect(() => {
        fetchWhoToFollow()
    }, [])

    async function fetchWhoToFollow() {
        const url = `${BASE_URL}/search/best-connections/abilliondollarsgoal`
        const response = await fetch(url)
        const resArr = await response.json()
        setWhoToFollowArr(resArr)
    }


    return (
        <>
            <Box
                width={388}
                sx={{
                    background: "#F6F8F8",
                    borderRadius: "16px"
                }}
            >

                <Box
                    paddingLeft={2.2}
                >
                    <Stack
                        alignContent={'center'}
                    >
                        <h2
                            style={{ padding: "0px", margin: "9px 0px 8px 0px" }}
                        >Who to follow</h2>
                    </Stack>
                </Box>
                <Stack>
                    {whoToFollowArr?.map(({ celeb, nameAndAvatar, _id }) => 
                        <SmallFollowCard 
                            key={_id} 
                            name={nameAndAvatar[0].name} 
                            avatar={nameAndAvatar[0].avatar} 
                            username={celeb} 
                        />
                    )}

                </Stack>
                <Box
                    paddingLeft={2.2}
                >
                    <Stack
                        alignContent={'center'}
                    >
                        <Typography paragraph sx={{ color: '#1D9BF0' }}>
                            Show more
                        </Typography>
                    </Stack>
                </Box>
            </Box>
        </>
    )
}