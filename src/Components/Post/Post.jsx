// import { styled } from '@mui/material/styles';
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
import FavoriteIcon from '@mui/icons-material/Favorite';
import IosShareIcon from '@mui/icons-material/IosShare';
import { Box, Grid, Stack } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import VerifiedIcon from '@mui/icons-material/Verified';

import { styled, alpha } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
// import Button from '@mui/material/Button';
// import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { BASE_URL } from '../../UniversalData/univeralData';
import axios from 'axios'

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

function timeSince(timeStamp, date) {
    date = new Date(date)
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
        let day = date.getDate();
        let month = date.toDateString().match(/ [a-zA-Z]*/)[0].replace(" ", "");
        let year = date.getFullYear() == now.getFullYear() ? "" : " " + date.getFullYear();
        return day + " " + month + year;
    }
}

const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      {...props}
    />
  ))(({ theme }) => ({
    '& .MuiPaper-root': {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      color:
        theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
      boxShadow:
        'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      '& .MuiMenu-list': {
        padding: '4px 0',
      },
      '& .MuiMenuItem-root': {
        '& .MuiSvgIcon-root': {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        '&:active': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity,
          ),
        },
      },
    },
  }));


export const Post = ({ title, avatar, image, name, username, createdAt, likes, _id }) => {

    const [expanded, setExpanded] = useState(false)

    const { user: { username: self } } = useSelector(store => store)

    const [isLiked, setIsLiked] = useState(likes.includes(self) ? true : false)
    const [countLikes, setCountLikes] = useState(likes.length)

    async function handleLike() {
        try {
            const url = `${BASE_URL}/create-post/${self}/${_id}`
            const response = await axios.post(url)
            if (response.data.status == 'success') {
                setIsLiked(!isLiked)
                setCountLikes(response.data.likes)
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    const handleExpandClick = () => setExpanded(!expanded)
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Card sx={{
            width: 664,
            border: "1px solid #F2F2F2",
            boxShadow: "none",
            '&:hover': {
                background: "#F6F8F8"
            }
        }}
            key={_id}
        >
            <Stack
                direction='row'

                sx={{ padding: "12px 7px 5px 7px" }}
            >
                <Stack>
                    <Box
                        padding="10px"
                    >
                        <Link style={{ textDecoration: "none", color: "black" }} to={`/${username}`}>
                            <Avatar sx={{ width: 56, height: 56 }} src={avatar} />
                        </Link>
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
                                    >
                                        <Link style={{ textDecoration: "none", color: "black" }} to={`/${username}`}>{name}</Link>
                                        <IconButton sx={{ padding: 0 }} >
                                            <VerifiedIcon color='primary' sx={{ fontSize: "22px" }} />
                                        </IconButton>
                                    </Typography>
                                </Grid>
                                <Grid item sx={{ width: "auto" }}>
                                    <Typography
                                        paragraph
                                        color='text.secondary'
                                        ml={-0.8}
                                    >
                                        <Link style={{ textDecoration: "none", color: "black" }} to={`/${username}`}>{username}</Link>
                                    </Typography>
                                </Grid>
                                <Grid item sx={{ width: "auto" }}
                                >
                                    <Typography paragraph>
                                        . {timeSince(new Date(createdAt).getTime(), createdAt)}
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
                            alt={name + " profile image"}
                            sx={{ borderRadius: 6, border: "1px solid #F2F2F2" }}
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

                            <span onClick={() => handleLike()}>
                                <IconButton aria-label="share">
                                    {
                                        isLiked ? <FavoriteIcon sx={{ color: "red" }} /> : <FavoriteBorderIcon />
                                    }

                                </IconButton>
                            </span>
                            <Typography paragraph sx={{ padding: "8px 10px 0px 0px" }}>{countLikes}</Typography>

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
                    <span onClick={handleClick}>
                        <IconButton aria-label="settings">
                            <MoreHorizIcon />
                        </IconButton>
                    </span>
                    <StyledMenu
                        id="demo-customized-menu"
                        MenuListProps={{
                            'aria-labelledby': 'demo-customized-button',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose} disableRipple>
                            <EditIcon />
                            Edit
                        </MenuItem>
                        <MenuItem onClick={handleClose} disableRipple>
                            <FileCopyIcon />
                            Duplicate
                        </MenuItem>
                        <Divider sx={{ my: 0.5 }} />
                        <MenuItem onClick={handleClose} disableRipple>
                            <ArchiveIcon />
                            Archive
                        </MenuItem>
                        <MenuItem onClick={handleClose} disableRipple>
                            <MoreHorizIcon />
                            More
                        </MenuItem>
                    </StyledMenu>
                </Stack>
            </Stack>
        </Card >
    );
}