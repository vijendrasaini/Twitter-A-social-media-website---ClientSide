import { IconButton, Stack } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { FollowCard } from "../Cards/FollowCard"
import CancelIcon from '@mui/icons-material/Cancel';
import { setIsSearching } from "../../Redux/actionCreators";



export const SearchResultBox = ()=>{
    const dispatch = useDispatch()
    const { searchArr, isSearching } = useSelector(store=>store)
    return (
        <Stack
        sx={{   width : 430,
                position : "absolute",
                marginLeft : -2 ,
                top: 58,
                zIndex : 2,
                background : "white",
                boxShadow: "rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px",
                borderRadius : 3,
                paddingY : 0.5,
                maxHeight : 550,
                overflowY : "scroll"
            }}
        >
            
            {isSearching && <span 
            onClick={()=>{dispatch(setIsSearching(false))
            console.log("wanna cancel")}}
            style={{float : "left"}}>
                    <IconButton sx={{color : "red"}}>
                        <CancelIcon/>
                    </IconButton>
                </span>}
            {!searchArr.length ?
                <h3 style={{textAlign : "center", paddingTop : 0, marginTop : -33}}>No Results Found</h3>
                :
                <h3 style={{textAlign : "center", paddingTop : 0, marginTop : -33}}>Your Search Results</h3>
            }
            {searchArr.map( user => <FollowCard key={user._id} {...user}/>)}
        </Stack>
    )
}