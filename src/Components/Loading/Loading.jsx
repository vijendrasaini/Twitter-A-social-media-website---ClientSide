import { Stack, Box, CircularProgress } from "@mui/material"



export const Loading = () => {
    return (

        <Box>
            <Stack
                sx={{ width: "100%", marginTop : 5 }}
                direction="row"
                justifyContent={"center"}
            >
                <CircularProgress/>
            </Stack>
        </Box>
    )
}