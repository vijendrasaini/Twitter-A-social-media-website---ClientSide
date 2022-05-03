import { Avatar, CardHeader, Typography } from "@mui/material"
import { Link} from 'react-router-dom'


export const FollowCard = ({username, name, avatar}) => {
    

    return (
        <Link to={"/"} style={{ color : 'black', textDecoration : "none"}}>
            <CardHeader
                sx={{ '&:hover': { background: '#F2F2F2' }, height: "50px" }}
                avatar={
                    <Avatar sx={{ width: "56px", height: "56px" }} aria-label="recipe" src={avatar || "https://pbs.twimg.com/profile_images/1503591435324563456/foUrqiEw_400x400.jpg"} />
                }
                title={<Typography paragraph p={0} m={0}
                    sx={{ fontWeight: "bold" }}
                >{name||"Elon Musk"}
                </Typography>}
                subheader={<Typography paragraph p={0} m={0} sx={{ color: "#536471" }}
                >{username ||"@elonmusk"}
                </Typography>}
            />
        </Link>
    )
}