import { Box } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { setIsSearching } from "../../Redux/actionCreators"
import { SearchBox } from "./SearchBox"
import { SearchResultBox } from "./SearchResultBox"

export const PortableSearchBox = () => {
    const { isSearching} = useSelector(store => store)
    const dispatch = useDispatch()
    return (
        <div
            onClick={()=>dispatch(setIsSearching(!isSearching))}
        >
            <SearchBox />
            {isSearching && <SearchResultBox />}
        </div>
    )
}