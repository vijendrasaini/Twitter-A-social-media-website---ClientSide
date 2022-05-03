import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ReviewsIcon from '@mui/icons-material/Reviews';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IosShareIcon from '@mui/icons-material/IosShare';
import { Box, Grid, Stack } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import VerifiedIcon from '@mui/icons-material/Verified';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

function timeSince(timeStamp) {
    var now = new Date(),
      secondsPast = (now.getTime() - timeStamp) / 1000;
    if (secondsPast < 60) {
      return parseInt(secondsPast) + 's';
    }
    if (secondsPast < 3600) {
      return parseInt(secondsPast / 60) + 'm';
    }
    if (secondsPast <= 86400) {
      return parseInt(secondsPast / 3600) + 'h';
    }
    if (secondsPast > 86400) {
      day = timeStamp.getDate();
      month = timeStamp.toDateString().match(/ [a-zA-Z]*/)[0].replace(" ", "");
      year = timeStamp.getFullYear() == now.getFullYear() ? "" : " " + timeStamp.getFullYear();
      return day + " " + month + year;
    }
  }
export const Post = ({title, avatar,image,name,username,createdAt, likes}) => {
    const [expanded, setExpanded] = useState(false)

    const handleExpandClick = () =>setExpanded(!expanded)

    return (
        <Card sx={{
            width: 664,
            border : "1px solid #F2F2F2",
            boxShadow : "none",
            '&:hover': {
                background: "#F6F8F8"
            }
        }}>
            <Stack
                direction='row'
                
                sx ={{padding: "12px 7px 5px 7px"}}
            >
                <Stack>
                    <Box
                        padding="10px"
                    >
                        <Avatar sx={{ width: 56, height: 56 }} src={avatar} />
                    </Box>
                </Stack>
                <Stack
                >
                    <Stack >
                        <Box>
                            <Stack
                                direction="row"
                                padding={"10px 10px 0px 0px"}
                                alignItems={"center"}
                                alignContent='center'
                                height={"10px"}
                                marginBottom={1}
                                mt={2.5}
                                spacing={1.2}
                            >
                                <Grid item sx={{ width: "auto" }}
                                >
                                    <Typography paragraph
                                        sx={{ fontWeight: "bold" }}
                                    >{name || "Elon Musk"}
                                    <IconButton sx={{padding : 0}} >
                                            <VerifiedIcon color='primary' sx={{fontSize : "22px"}}/>
                                        </IconButton>
                                    </Typography>
                                </Grid>
                                <Grid item sx={{ width: "auto" }}
                                >
                                    <Typography
                                        paragraph
                                        color='text.secondary'
                                        ml={-0.8}
                                    >
                                        {username || "@elonmusk"}
                                    </Typography>
                                </Grid>
                                <Grid item sx={{ width: "auto" }}
                                >
                                    <Typography paragraph>
                                        . {timeSince(new Date(createdAt).getTime())}
                                    </Typography>
                                </Grid>
                            </Stack>
                        </Box>
                    </Stack>
                    <CardContent
                        sx={{ padding: 0 }}

                    >
                        <Typography paragraph>
                            {title ? title : ""}
                        </Typography>
                    </CardContent>
                    {image && (
                        <CardMedia
                        component="img"
                        image={image}
                        alt="Paella dish"
                        sx={{borderRadius:6, border :"1px solid #F2F2F2"}}
                    />
                    )}
                    <Stack
                        direction="row"
                        justifyContent='space-between'
                        mt={0.7}
                    >
                        <Stack
                            direction='row'
                            spacing={0.7}
                        >
                            <IconButton aria-label="add to favorites">
                                <ChatBubbleOutlineIcon />
                            </IconButton>
                            <Typography paragraph sx={{ padding: "8px 10px 0px 0px" }}>{"comments"}</Typography>
                        </Stack>
                        <Stack
                            direction='row'
                            spacing={0.7}
                        >
                            <IconButton aria-label="share">
                                <ReviewsIcon />
                            </IconButton>
                            <Typography paragraph sx={{ padding: "8px 10px 0px 0px" }}>{"276"}</Typography>
                        </Stack>
                        <Stack
                            direction='row'
                            spacing={0.7}
                        >

                            <IconButton aria-label="share">
                                <FavoriteBorderIcon />
                            </IconButton>
                            <Typography paragraph sx={{ padding: "8px 10px 0px 0px" }}>{likes}</Typography>

                        </Stack>
                        <Stack
                            direction='row'
                            spacing={0.7}
                        >
                            <IconButton aria-label="share">
                                <IosShareIcon />
                            </IconButton>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack>
                    <IconButton aria-label="settings">
                        <MoreHorizIcon />
                    </IconButton>
                </Stack>
            </Stack>
        </Card >
    );
}