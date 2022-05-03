import { Box } from "@mui/material"
import { useSelector } from "react-redux"
import { SearchBox } from "./SearchBox"
import { SearchResultBox } from "./SearchResultBox"

export const PortableSearchBox = () => {
    const { isSearching} = useSelector(store => store)

    return (
        <Box>
            <SearchBox />
            {isSearching && <SearchResultBox />}
        </Box>
    )
}