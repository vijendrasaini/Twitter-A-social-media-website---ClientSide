import {Box, Button, Link, Grid } from "@mui/material"
// import {Link } from 'react-router-dom'

export const Privacy = () => {

    return (
            <Box p={2}>
                <Box
                width={348}
            >
                <Grid
                    spacing = {2}
                >
                    <Link href='#' component={"span"} mx={1} underline="hover" variant="body2" color={"inherit"}>Terms of Service</Link>
                    <Link href='#' component={"span"} mx={1} underline="hover" variant="body2" color={"inherit"}>Privacy Policy</Link>
                    <Link href='#' component={"span"} mx={1} underline="hover" variant="body2" color={"inherit"}>Cookie Policy</Link>
                    <Link href='#' component={"span"} mx={1} underline="hover" variant="body2" color={"inherit"}>Accessibility</Link>
                    <Link href='#' component={"span"} mx={1} underline="hover" variant="body2" color={"inherit"}>Ads info</Link>
                    <Link href='#' component={"span"} mx={1} underline="hover" variant="body2" color={"inherit"}>More...</Link><br />
                    <Link href='#' component={"span"} mx={1} underline="hover" variant="body2" color={"inherit"}>© 2022 Twitter, Inc.</Link>
                </Grid>
            </Box>
            </Box>
            
    )
}