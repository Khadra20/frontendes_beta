import { Box ,Stack,Typography,Drawer} from "@mui/material"
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import SendIcon from '@mui/icons-material/Send';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import InfoIcon from '@mui/icons-material/Info';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import CabinIcon from '@mui/icons-material/Cabin';
import { useState } from "react";
import { Link } from "react-router-dom";
export const Sidepar=({DrawerOpen,DrawerClose})=>{
    const [selectedMenu,setMenu]=useState('')
    return (
        <>
 
{/* MENUE SIDEPAR LIS */}
<Drawer   
   
   open={DrawerOpen}
   onClose={DrawerClose}
   >


   <Box sx={{width:300}}>
<Box  sx={{p:4}}>
<Stack spacing={1} direction={'row'}>
<Box>
    <CabinIcon sx={{color:'blue' , fontSize:50,height:30}}/>
</Box>
<Box>
    <Typography variant='h5'>BetaHouse</Typography>
</Box>

</Stack>
</Box>
{/* MENUE SIDEPAR LIS */}
<Box sx={{width:"100%",maxWidth: 300, bgcolor:'Background paper'}} component={"nav"}>
<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
 
    >
      <ListItemButton>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      <Link to={'home'}>
      <ListItemButton
      sx={[selectedMenu === 'Home' && {bgcolor:"primary.main",color:"white",":hover":{
        bgcolor:"primary.dark"
      }}]}
      onClick={()=>{
        setMenu('Home')
        DrawerClose()
      }}>
        <ListItemIcon>
          <DashboardIcon sx={[selectedMenu==='Home' && {color:"white"}]} />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItemButton>

      </Link>


      <ListItemButton sx={[selectedMenu === 'Guryaha' && {bgcolor:"primary.main",color:"white",":hover":{
        bgcolor:"primary.dark"
      }}]}
      onClick={()=>{
        setMenu('Guryaha')
        DrawerClose()

      }}>
        <ListItemIcon>
          <InfoIcon  sx={[selectedMenu==='Guryaha' && {color:"white"}]}  />
        </ListItemIcon>
        <ListItemText primary="Guryaha" />
        
      </ListItemButton>
     

      <Link to={'image'}>
      <ListItemButton >
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Images" />
        
      </ListItemButton>
</Link>
      <ListItemButton >
        <ListItemIcon>
          <InfoIcon />
        </ListItemIcon>
        <ListItemText primary="Services" />
        
      </ListItemButton>

<Link to={'client'}>
      <ListItemButton sx={[selectedMenu === 'client' && {bgcolor:"primary.main",color:"white",":hover":{
        bgcolor:"primary.dark"
      }}]}
      onClick={()=>{
        setMenu('client')
        DrawerClose()

      }}>
        <ListItemIcon>
          <CabinIcon  sx={[selectedMenu==='client' && {color:"white"}]} />
        </ListItemIcon>
        <ListItemText primary="Clients" />
        
      </ListItemButton>
      </Link>
      <ListItemButton >
        <ListItemIcon>
          < AddIcCallIcon/>
        </ListItemIcon>
        <ListItemText primary="Contacts" />
        
      </ListItemButton>

    </List>
</Box>
   </Box>
   </Drawer> 
<Box sx={{width:300,height:'100vh', display:{
    xs:'none',
    md:'block'
},borderRight:'1',borderColor:'#eee'}}>
<Box sx={{p:4}}>
<Stack direction={'row'} spacing={1}>
<Box>
    <CabinIcon sx={{color:'blue' , fontSize:50,height:30}}/>
</Box>
<Box>
    <Typography variant='h6'>BetaHouse</Typography>
</Box>
</Stack>
</Box>

{/* Menulis */}

<Box sx={{width:"100%",maxWidth: 300, bgcolor:'Background paper'}} component={"nav"}>
<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
 
    >
      <ListItemButton>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      <Link to={'home'}>
      <ListItemButton
      sx={[selectedMenu === 'Home' && {bgcolor:"primary.main",color:"white",":hover":{
        bgcolor:"primary.dark"
      }}]}
      onClick={()=>{
        setMenu('Home')
        DrawerClose()
      }}>
        <ListItemIcon>
          <SendIcon sx={[selectedMenu==='Home' && {color:"white"}]} />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItemButton>

      </Link>


      <ListItemButton sx={[selectedMenu === 'Guryaha' && {bgcolor:"primary.main",color:"white",":hover":{
        bgcolor:"primary.dark"
      }}]}
      onClick={()=>{
        setMenu('Guryaha')
        DrawerClose()

      }}>
        <ListItemIcon>
          <CabinIcon  sx={[selectedMenu==='Guryaha' && {color:"white"}]}  />
        </ListItemIcon>
        <ListItemText primary="Guryaha" />
        
      </ListItemButton>
     


      <ListItemButton >
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Images" />
        
      </ListItemButton>

      <ListItemButton >
        <ListItemIcon>
          <InfoIcon />
        </ListItemIcon>
        <ListItemText primary="Services" />
        
      </ListItemButton>

<Link to={'client'}>
      <ListItemButton sx={[selectedMenu === 'client' && {bgcolor:"primary.main",color:"white",":hover":{
        bgcolor:"primary.dark"
      }}]}
      onClick={()=>{
        setMenu('client')
        DrawerClose()

      }}>
        <ListItemIcon>
          <DashboardIcon  sx={[selectedMenu==='client' && {color:"white"}]} />
        </ListItemIcon>
        <ListItemText primary="Clients" />
        
      </ListItemButton>
      </Link>
      <ListItemButton >
        <ListItemIcon>
          <AddIcCallIcon />
        </ListItemIcon>
        <ListItemText primary="Contacts" />
        
      </ListItemButton>

    </List>
</Box>
</Box>

</>
    )
}