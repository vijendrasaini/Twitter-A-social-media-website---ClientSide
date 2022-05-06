import { Button } from "@mui/material"
import { useState } from "react"



const initialText = "Follwing"
export const UnFollowToggleBtn = ({ doUnfollow }) => {

    const [buttonText, setButtonText] = useState(initialText)

    return (
        <Button
            onMouseOver={() => setButtonText('unfollow')}
            onMouseLeave={() => setButtonText(initialText)}
            onClick={doUnfollow}

            fullWidth
            variant="contained"
            sx={{
                bgcolor: 'white',
                color: 'black',
                borderRadius: "99px",
                fontWeight: '600',
                textTransform: 'none',
                boxShadow: "none",
                border: "1px solid #dfe3e4",
                width: '130px',
                fontSize: "16px",
                '&:hover':
                {
                    background: 'white',
                    color: 'red',
                    boxShadow: "none",
                    borderColor: "red"
                }
            }}
        >{buttonText}
        </Button>
    )
}