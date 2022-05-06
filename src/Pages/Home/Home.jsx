import { LeftMenu } from "../../Components/LeftMenu/LeftMenu"
import { PostingDashbord } from "../../Components/PostingDashbord/PostingDashbord"
import { Privacy } from "../../Components/Privacy"
import { WhotoFollow } from "../../Components/WhoToFollowBox/WhotoFollow"
import { PortableSearchBox } from "../../Components/SearchBar/PortableSearchBox"
import { FeedPostBox } from "../../Components/FeedPostBox/FeedPostBox"
import { HomeHeader } from "../../Components/HomeHeader/HomeHeader"
import { useSelector } from "react-redux"

import { Box, LinearProgress, Stack } from "@mui/material"

export const Home = () => {
    const { loading : { dashBoardLoading} } = useSelector(store => store)

    return (
        <div
            style={{ margin: "auto", width: 1380 }}
        >
            <Stack direction={"row"}>
                <LeftMenu />
                <Stack>
                    <Stack direction="row" spacing={4} sx={{ position: "fixed", background: "white", zIndex: 5 }}>
                        <HomeHeader />
                        <PortableSearchBox />
                    </Stack>
                    <Stack direction={"row"} spacing={4} sx={{ marginTop: "65px" }}>
                        <Box spacing={0} >
                            <PostingDashbord />
                            {dashBoardLoading && <Box sx={{ width: '100%' }}>
                                <LinearProgress />
                            </Box>}
                            <FeedPostBox />
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