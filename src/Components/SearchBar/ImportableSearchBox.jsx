import { Box } from "@mui/material"
import { useSelector } from "react-redux"
import { SearchBox } from "../SearchBar/SearchBox"
import { SearchResultBox } from "../SearchBar/SearchResultBox"

export const ImportableSearchBox = () => {
    const { isSearching} = useSelector(store => store)

    return (
        <Box>
            <SearchBox />
            {isSearching && <SearchResultBox />}
        </Box>
    )
}