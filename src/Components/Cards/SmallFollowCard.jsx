import { Avatar, Button, CardHeader, Typography } from "@mui/material"
import axios from "axios"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { BASE_URL } from "../../UniversalData/univeralData"
import { FollowBtn } from "../Buttons/FollowBtn"
import { UnFollowToggleBtn } from "../Buttons/UnFollowToggleBtn"



export const SmallFollowCard = ({ avatar, name, username : usernameB }) => {

    const [isFollowing, setIsFollowing] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()



    const { user : {username}, followingStatus } = useSelector(store=>store)
    async function startFollowing() {
        try {
            const url = `${BASE_URL}/follow/${username}/${usernameB}`
            const response = await axios.post(url)
            if(response.data.status == 'success')
            {
                dispatch(toggleFollowingStatus({
                    ...followingStatus,
                    followers: followingStatus.followers + 1
                }))
                setIsFollowing(true)
            }
            
        } catch (error) {
            console.log(error.message)
        }
    }

    async function doUnfollow() {
        try {
            const url = `${BASE_URL}/follow/${username}/${usernameB}`
            const response = await axios.delete(url)
            if(response.data.status == 'success')
            {
                dispatch(toggleFollowingStatus({
                    ...followingStatus,
                    followers: followingStatus.followers - 1
                }))
                setIsFollowing(false)
            }
        } catch (error) {
            console.log(error.message)
        }

        // const response = await fetch(url, {
        //     method: "DELETE"
        // })
        // const res = await response.json()
        // if()
        // dispatch(toggleFollowingStatus({
        //     ...followingStatus,
        //     followers: followingStatus.followers - 1
        // }))
        // setIsFollowing(true)
    }

    return (
        <CardHeader
            sx={{ '&:hover': { background: '#F2F2F2', cursor : "pointer" }, height: "50px" }}
            avatar={
                <Avatar sx={{ width: "56px", height: "56px" }} aria-label="recipe" src={avatar} />
            }
            onClick={()=>navigate(`/${usernameB}`)}
            action={
                isFollowing ? <UnFollowToggleBtn doUnfollow={doUnfollow} /> :<FollowBtn startFollowing={startFollowing}/>
                // <Button
                //     fullWidth
                //     variant="contained"
                //     sx={{
                //         bgcolor: 'black',
                //         color: 'white',
                //         borderRadius: "99px",
                //         fontWeight: '600',
                //         textTransform: 'none',
                //         marginTop: "12px",
                //         '&:hover':
                //         {
                //             background: 'black',
                //             color: 'white'
                //         }
                //     }}
                // >Follow</Button>
            }
            title={<Typography paragraph p={0} m={0}
                sx={{ fontWeight: "bold" }}
            >{name}
            </Typography>}
            subheader={<Typography paragraph p={0} m={0} sx={{ color: "#536471" }}
            >{usernameB}
            </Typography>}
        />
    )
}