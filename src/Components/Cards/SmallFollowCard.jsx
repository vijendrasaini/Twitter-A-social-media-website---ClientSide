import { Avatar, Button, CardHeader, Typography } from "@mui/material"



export const SmallFollowCard = ({ avatar, name, username }) => {

    return (
        <CardHeader
            sx={{ '&:hover': { background: '#F2F2F2' }, height: "50px" }}
            avatar={
                <Avatar sx={{ width: "56px", height: "56px" }} aria-label="recipe" src={avatar} />
            }
            action={
                <Button
                    fullWidth
                    variant="contained"
                    sx={{
                        bgcolor: 'black',
                        color: 'white',
                        borderRadius: "99px",
                        fontWeight: '600',
                        textTransform: 'none',
                        marginTop: "12px",
                        '&:hover':
                        {
                            background: 'black',
                            color: 'white'
                        }
                    }}
                >Follow</Button>
            }
            title={<Typography paragraph p={0} m={0}
                sx={{ fontWeight: "bold" }}
            >{name}
            </Typography>}
            subheader={<Typography paragraph p={0} m={0} sx={{ color: "#536471" }}
            >{username}
            </Typography>}
        />
    )
}