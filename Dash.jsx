import {Box ,Stack,Typography,IconButton} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { Outlet } from "react-router-dom";
import { Sidepar } from './sidepar';
import { Cleints } from '../Cleints/cleint';
import { useState } from 'react'
export const Dasboard=()=>{
    const [draweOpen,setDrawer]=useState(false)
    const TogleDrowe=()=>{
        setDrawer(!draweOpen)
    }
return(
    <>
    
    
    <Box>
        <Stack direction={'row'}>
<Sidepar DrawerOpen={draweOpen} DrawerClose={TogleDrowe}/>
<Box sx={{width:"100%"}}>
{/* top header */}

<Box sx={{bgcolor:"primary.main",color:"white",display:"flex",justifyContent:{
    xs:"space-between",
    md:"end"
}}} p={2}>
    
<IconButton sx={{p:0,display:{
    xs:"block",
    md:"none"
}}} onClick={()=>TogleDrowe()}>
    <MenuIcon sx={{color:"white"}}/>
</IconButton>

<Typography > User : hayat@gmail.com</Typography>
</Box>

{/* top header end */}

{/* content pages */}


{/* <Clients/> */}

<Outlet/>
 
{/* end content */}


 
</Box>
</Stack>
      </Box>
      
    </>
  

)
}