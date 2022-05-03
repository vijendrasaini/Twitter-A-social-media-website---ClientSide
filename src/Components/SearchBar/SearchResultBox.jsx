import { Box, Stack } from "@mui/material"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { FollowCard } from "../Cards/FollowCard"



export const SearchResultBox = ()=>{

    const { searchArr } = useSelector(store=>store)
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
            
            {!searchArr.length ?
                <h3 style={{textAlign : "center"}}>No Results Found</h3>
                :
                <h3 style={{textAlign : "center"}}>Your Search Results</h3>
            }
            {searchArr.map( user => <FollowCard key={user._id} {...user}/>)}
        </Stack>
    )
}