import { IconButton} from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import './searchBox.css'
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { performSearch, setIsSearching } from "../../Redux/actionCreators";

export const SearchBox = () => {

    const [searchText,setSearchText] = useState("")
    const { isSearching} = useSelector(store=>store)
    const dispatch = useDispatch()
    const id = useRef(null)
    function debounce(){
        // if(id.current)
        //     {
        //         clearTimeout(id.current)
        //         id.current = null
        //     }
        // id.current = setTimeout(()=>{
            dispatch(performSearch(searchText))
        // }, 400)
    }
    return (
        <>
            <div
                className="searchWrapper"
                onClick={()=>dispatch(setIsSearching(true))}
            >
                <IconButton size="large" sx={{ ml: 2 }}>
                    <SearchIcon />
                </IconButton>
                <input 
                    className="searchInput" 
                    type="text"  
                    onChange={(e)=>{
                        setSearchText(e.target.value)
                        debounce()
                    }}
                    value={searchText}
                    placeholder="Search Twitter" />
            </div>
        </>
    )
}