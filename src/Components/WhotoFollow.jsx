import { Avatar, Box, CardHeader, IconButton, Typography, Stack, Button, Link, Grid } from "@mui/material"
import MoreVertIcon from '@mui/icons-material/MoreVert';
// import {Link } from 'react-router-dom'



export const WhotoFollow = () => {




    return (
        <>
            <Box
                width={388}
                sx={{
                    background: "#F6F8F8",
                    borderRadius: "16px"
                }}
            >

                <Box
                    paddingLeft={2.2}
                >
                    <Stack
                        alignContent={'center'}
                    >
                        <h2
                            style={{ padding: "0px", margin: "9px 0px 8px 0px" }}
                        >Who to follow</h2>
                    </Stack>
                </Box>
                <Stack>
                    <CardHeader
                        sx={{ '&:hover': { background: '#F2F2F2' }, height: "50px" }}
                        avatar={
                            <Avatar sx={{ width: "56px", height: "56px" }} aria-label="recipe" src="https://pbs.twimg.com/profile_images/1503591435324563456/foUrqiEw_400x400.jpg" />
                        }
                        action={
                            <Button
                                fullWidth
                                variant="contained"
                                sx={{
                                    bgcolor: 'black',
                                    color: 'white',
                                    borderRadius: "99px",
                                    fontWeight: '600',
                                    textTransform: 'none',
                                    marginTop: "12px",
                                    '&:hover':
                                    {
                                        background: 'black',
                                        color: 'white'
                                    }
                                }}
                            >Follow</Button>
                        }
                        title={<Typography paragraph p={0} m={0}
                            sx={{ fontWeight: "bold" }}
                        >{"Elon Musk"}
                        </Typography>}
                        subheader={<Typography paragraph p={0} m={0} sx={{ color: "#536471" }}
                        >{"@elonmusk"}
                        </Typography>}
                    />
                    <CardHeader
                        sx={{ '&:hover': { background: '#F2F2F2' }, height: "50px" }}
                        avatar={
                            <Avatar sx={{ width: "56px", height: "56px" }} aria-label="recipe" src="https://pbs.twimg.com/profile_images/1503591435324563456/foUrqiEw_400x400.jpg" />
                        }
                        action={
                            <Button
                                fullWidth
                                variant="contained"
                                sx={{
                                    bgcolor: 'black',
                                    color: 'white',
                                    borderRadius: "99px",
                                    fontWeight: '600',
                                    textTransform: 'none',
                                    marginTop: "12px",
                                    '&:hover':
                                    {
                                        background: 'black',
                                        color: 'white'
                                    }
                                }}
                            >Follow</Button>
                        }
                        title={<Typography paragraph p={0} m={0}
                            sx={{ fontWeight: "bold" }}
                        >{"Elon Musk"}
                        </Typography>}
                        subheader={<Typography paragraph p={0} m={0}
                        >{"@elonmusk"}
                        </Typography>}
                    />
                    <CardHeader
                        sx={{ '&:hover': { background: '#F2F2F2' }, height: "50px" }}
                        avatar={
                            <Avatar sx={{ width: "56px", height: "56px" }} aria-label="recipe" src="https://pbs.twimg.com/profile_images/1503591435324563456/foUrqiEw_400x400.jpg" />
                        }
                        action={
                            <Button
                                fullWidth
                                variant="contained"
                                sx={{
                                    bgcolor: 'black',
                                    color: 'white',
                                    borderRadius: "99px",
                                    fontWeight: '600',
                                    textTransform: 'none',
                                    marginTop: "12px",
                                    '&:hover':
                                    {
                                        background: 'black',
                                        color: 'white'
                                    }
                                }}
                            >Follow</Button>
                        }
                        title={<Typography paragraph p={0} m={0}
                            sx={{ fontWeight: "bold" }}
                        >{"Elon Musk"}
                        </Typography>}
                        subheader={<Typography paragraph p={0} m={0}
                        >{"@elonmusk"}
                        </Typography>}
                    />
                </Stack>
                <Box
                    paddingLeft={2.2}
                >
                    <Stack
                        alignContent={'center'}
                    >
                        <Typography paragraph sx={{ color: '#1D9BF0' }}>
                            Show more
                        </Typography>
                    </Stack>
                </Box>
            </Box>
        </>
    )
}