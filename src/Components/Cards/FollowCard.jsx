import { Avatar, CardHeader, Typography } from "@mui/material"
import { useDispatch } from "react-redux"
import { Link, useNavigate} from 'react-router-dom'
import { setIsSearching } from "../../Redux/actionCreators"


export const FollowCard = ({username, name, avatar}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    return (
            <CardHeader
                onClick={()=>{
                    dispatch(setIsSearching(false))
                    navigate(`/${username}`)
                }}
                sx={{ '&:hover': { background: '#F2F2F2',cursor : "pointer" }, height: "50px" ,}}
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
    )
}