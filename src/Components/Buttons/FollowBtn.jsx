import { Button } from "@mui/material"

export const FollowBtn = ({ startFollowing }) => {


    return (
        <Button
            onClick={startFollowing}
            fullWidth
            variant="contained"
            sx={{
                mt: 2,
                mb: 2,
                borderRadius: "99px",
                boxShadow: "0 -1px 0 rgba(0, 0, 0, .04), 0 2px 4px rgba(0, 0, 0, .25)",
                fontSize: "16px",
                fontWeight: '600',
                textTransform: 'none',
                background: 'black',
                color: 'white',
                paddingY: "9px",
                '&:hover': {
                    color: 'white',
                    background: '#171717'
                }
            }}
        >
            Follow
        </Button>
    )
}