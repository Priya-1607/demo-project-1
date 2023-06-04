import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea, CssBaseline, Divider, Grid, Link, Paper} from '@mui/material';
import Box from "@mui/material/Box";
import {styled} from "@mui/material/styles";
// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
// }));


function Dashboard(props:any) {
    return (
        <div>
            <Typography variant={"h4"}>Dashboard</Typography>
            <Typography variant={"body2"} style={{color:"#6c757d"}}>Dashboard</Typography>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={3}>
                    <Card sx={{ maxWidth: 345 ,backgroundColor:"#0d6efd"}}>
                        <CardActionArea>

                            <CardContent>
                                <Typography gutterBottom variant="body1" component="div" sx={{mt:2,mb:2,color:"white"}}>
                                    Primary Card
                                </Typography>
                                <Divider />
                                <Typography sx={{mt:2}} variant="body2" color="text.light">
                                  <Typography  variant="body2" sx={{color:"white"}} >
                                     <u>View Details</u>
                                  </Typography>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card sx={{ maxWidth: 345 ,backgroundColor:"#ffc107"}}>
                        <CardActionArea>

                            <CardContent>
                                <Typography gutterBottom variant="body1" component="div" sx={{mt:2,mb:2,color:"white"}}>
                                    Warning Card
                                </Typography>
                                <Divider />
                                <Typography sx={{mt:2}} variant="body2" color="white">
                                    <Typography  variant="body2" sx={{color:"white"}} >
                                        <u>View Details</u>
                                    </Typography>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card sx={{ maxWidth: 345 ,backgroundColor:"#198754"}}>
                        <CardActionArea>

                            <CardContent>
                                <Typography gutterBottom variant="body1" component="div" sx={{mt:2,mb:2,color:"white"}}>
                                    Success Card
                                </Typography>
                                <Divider />
                                <Typography sx={{mt:2}} variant="body2" color="white">
                                    <Typography  variant="body2" sx={{color:"white"}} >
                                        <u>View Details</u>
                                    </Typography>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card sx={{ maxWidth: 345 ,backgroundColor:"#dc3545"}}>
                        <CardActionArea>

                            <CardContent>
                                <Typography gutterBottom variant="body1" component="div" sx={{mt:2,mb:2,color:"white"}}>
                                    Danger Card
                                </Typography>
                                <Divider />
                                <Typography sx={{mt:2}} variant="body2" color="white">
                                    <Typography  variant="body2" sx={{color:"white"}} >
                                        <u>View Details</u>
                                    </Typography>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>

        </div>
    );
}

export default Dashboard;
