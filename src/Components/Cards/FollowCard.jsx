import { Avatar, CardHeader, Typography } from "@mui/material"
import { Link, useNavigate} from 'react-router-dom'


export const FollowCard = ({username, name, avatar}) => {
    const navigate = useNavigate()
    return (
        <Link
            to={`/${username}`} 
            style={{ color : 'black', textDecoration : "none"}}
            >
            <CardHeader
                sx={{ '&:hover': { background: '#F2F2F2' }, height: "50px" ,cursor : "poiner",}}
                avatar={
                    <Avatar sx={{  width: "56px", height: "56px" }} aria-label="recipe" src={avatar} />
                }
                title={<Typography paragraph p={0} m={0}
                    sx={{ fontWeight: "bold" }}
                >{name}
                </Typography>}
                subheader={<Typography paragraph p={0} m={0} sx={{ color: "#536471" }}
                >{username}
                </Typography>}
            />
        </Link>
    )
}