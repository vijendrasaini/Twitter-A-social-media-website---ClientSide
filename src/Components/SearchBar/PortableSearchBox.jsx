import { useSelector } from "react-redux"
import { SearchBox } from "./SearchBox"
import { SearchResultBox } from "./SearchResultBox"

export const PortableSearchBox = () => {
    const { isSearching} = useSelector(store => store)
    return (
        <div>
            <SearchBox />
            {isSearching && <SearchResultBox />}
        </div>
    )
}