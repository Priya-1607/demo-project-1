"use client"
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Dashboard from "@/app/components/dashboard";
import {Chart} from "chart.js";
import Barchart from "@/app/components/Barchart";
import {useState} from "react";
import {UserData} from "@/app/components/data";
import Linechart from "@/app/components/LineChart";
import {UserDataLine} from "@/app/components/LineChartData";
import {Table} from "@/app/components/Table";
import DataTableBox from "@/app/components/DataTableBox";
import {alpha, InputBase, Link} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
    open?: boolean;
}>(({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    }),
}));

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 3,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: '20%',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 1),

    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'end',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));
const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'end',
}));

export default function PersistentDrawerLeft() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
const [userData,setUserdata]=useState({labels:UserData.map((data)=>data.month),datasets:[{

        label:"User Gained",
        data:UserData.map((data)=>data.userGain),
        backgroundColor:["#0d6efd"]
    }]})
    const [userDataLine,setUserdataLine]=useState({labels:UserDataLine.map((data)=>data.month),datasets:[{

            label:"User Gained",
            data:UserDataLine.map((data)=>data.userGain),
            backgroundColor:["#0d6efd"]
        }]})
    return (
        <Box sx={{ display: 'flex' }}  >
            <CssBaseline/>
            <AppBar position="fixed" open={open} style={{backgroundColor:"#212529"}}>
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        Start Bootstrap
                    </Typography>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ m: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box sx={{display:"flex"}}>
                    <Box sx={{backgroundColor:"white",ml:110,borderRadius:"8px"}}>
                    <Search sx={{backgroundColor:"white",boderRadius:"20px"}}>
                        <SearchIconWrapper sx={{backgroundColor:"blue",borderTopRightRadius:"8px",borderBottomRightRadius:"8px",ml:30}}><SearchIcon /></SearchIconWrapper>
                        <StyledInputBase
                            sx={{color:"grey"}}
                            placeholder="Search for…"
                            inputProps={{ 'aria-label': 'search' }}
                        />



                    </Search>

                    </Box>
                    <Box sx={{color:"#ced4da",borderTopRightRadius:"8px"}}><PersonIcon/></Box></Box>
                </Toolbar>


            </AppBar>

            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        backgroundColor:"#212529",
                        color:"#6c757d",
                        boxSizing: 'border-box',
                    },
                }}

                variant="persistent"
                anchor="left"
                open={open}
            >

                <DrawerHeader>
                    <Typography variant="body2" noWrap component="div">CORE</Typography>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon sx={{color:"white"} }/> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>

                <Divider />
                <List sx={{flexDirection: 'column',m:2}}>
                    <Box sx={{textAlign:"center"}}>  <p style={{textAlign:"center"}}><a href="/dashboard"
                                 className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Dashboard
                    </a></p></Box>

                </List>
 {/*               <p>INTERFACE</p>*/}
 {/*               <List sx={{flexDirection: 'column'}} sx={{flexDirection: 'column',m:2}}>*/}
 {/*                   <Box sx={{textAlign:"center"}}>  <p style={{textAlign:"center"}}><a href="/layout"*/}
 {/*                                className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Layout*/}
 {/*                   </a></p></Box>*/}
 {/*<Box sx={{textAlign:"center"}}>  <p style={{textAlign:"center"}}><a href="/page"*/}
 {/*                                className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Page*/}
 {/*                   </a></p></Box>*/}

 {/*               </List>*/}
 {/*               <Divider />*/}

            </Drawer>

            <Main open={open} >
                <DrawerHeader  />
               <Dashboard/>
                <Box sx={{display:"flex",gap:2}}>
                <Box sx={{width:720,mt:5, border: '1px solid grey',borderRadius:"10px" }}>  <Box sx={{p:'1rem',borderBottom:'1px solid grey',backgroundColor:"#dee2e6",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}}><Typography varient={"body2"}>Line Chart Example</Typography></Box><Box style={{width:700}}> <Linechart chartData={userDataLine}/></Box></Box>
                <Box sx={{width:720,mt:5, border: '1px solid grey',borderRadius:"10px" }}>  <Box sx={{p:'1rem',borderBottom:'1px solid grey',backgroundColor:"#dee2e6",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}}><Typography varient={"body2"}>Bar Chart Example</Typography></Box><Box style={{width:700}}> <Barchart chartData={userData}/></Box></Box>
                </Box>
                <Box sx={{width:"100%",height:"45%",mt:5, border: '1px solid grey',borderRadius:"10px" }}> <Box sx={{p:'1rem',borderBottom:'1px solid grey',backgroundColor:"#dee2e6",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}}><Typography varient={"body2"}>DataTable Example</Typography></Box><Box style={{width:"100%",height:"50%"}}>
                    <Box sx={{p:"10px"}}><DataTableBox /></Box></Box></Box>

            </Main>


        </Box>



    );

}
