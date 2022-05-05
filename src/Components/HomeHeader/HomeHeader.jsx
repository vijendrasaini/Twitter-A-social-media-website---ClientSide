import { IconButton, Stack, Typography } from "@mui/material"
import StarHalfIcon from '@mui/icons-material/StarHalf';


export const HomeHeader = () => {

    return (
        <Stack
            direction="row" justifyContent='space-between' p={1.5}
            sx={{ width: 640, hight: 53, borderRight: "1px solid #F2F2F2", borderLeft: "1px solid #F2F2F2" }}
        >
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Home</Typography>
            <IconButton aria-label="share" color="primary">
                <StarHalfIcon />
            </IconButton>
        </Stack>
    )
}