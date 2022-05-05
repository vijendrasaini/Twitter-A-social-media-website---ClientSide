import { Box,Stack } from "@mui/material"
import { LeftMenu } from "../LeftMenu/LeftMenu"
import { PostingDashbord } from "../PostingDashbord/PostingDashbord"
import { Privacy } from "../Privacy"
import { WhotoFollow } from "../WhoToFollowBox/WhotoFollow"
import {PortableSearchBox } from "../SearchBar/PortableSearchBox"
import { FeedPostBox } from "../FeedPostBox/FeedPostBox"
import { HomeHeader } from "../HomeHeader/HomeHeader"


export const Home = () => {


    return (
        <div
            style={{ margin: "auto", width: 1380 }}
        >
            <Stack direction={"row"}>
                <LeftMenu />
                <Stack>
                    <Stack direction="row" spacing={4} sx={{position:"fixed", background : "white", zIndex : 5}}>
                        <HomeHeader/>
                        <PortableSearchBox/>
                    </Stack>
                    <Stack direction={"row"} spacing={4} sx={{marginTop:"65px"}}>
                        <Box spacing={0} >
                            <PostingDashbord />
                            <FeedPostBox/>
                        </Box>
                        <Stack >
                            <WhotoFollow />
                            <Privacy />
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </div>
    )
}