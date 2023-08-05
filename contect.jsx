import React from "react";
import { Box,Stack,IconButton,Typography,Alert,TextField,Button, Divider, Icon, } from "@mui/material"
import { useState,useEffect } from "react";
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { AddCircleOutlineSharp, ClassSharp } from "@mui/icons-material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useForm } from "react-hook-form";
import {postcontect,GetAllcontect,updatecontect,DeletContect} from './ConApi'
 import { Link } from "react-router-dom";
 import Contectlist from "./conlist";
export const Contects=()=>{
    const [conid,setconid]=useState("")
    const {register,handleSubmit,reset,setValue,formState:{errors}} = useForm()
  const [dailogOpen,setDailogopen]=useState(false)
  const togledailog=()=>{
    setDailogopen(!dailogOpen)
  }
  const [contect,setcontect]=useState([])
 useEffect(()=>{
const Allcontects=async()=>{
    const data =await GetAllcontect()
    // console.log(data)
    setcontect(data)
}
Allcontects()
 })
 const Addcontect = async (data)=>{

    if(conid !==''){

 try{
  await updatecontect(conid,data)
console.log("Data has been Updated")
togledailog()
reset()
    } catch( err){
console.log("error ayaa jira ",err)

    }
    }
    else {
        try{
            await postcontect(data)
          console.log("Data has been saved")
          togledailog()
          reset()
              } catch( err){
          console.log("error ayaa jira ",err)
          
              }

    }
    
  
   
}
 
return( <>

<Box>
    <Divider sx={{height:10}}/>
<Box>
    <Alert severity="info">List Cleint </Alert>
</Box>
<Box sx={{display:'flex', justifyContent:'space-between'}} my={4}>
<Typography variant="h6">Lis contect</Typography>
<IconButton onClick={togledailog}>
    <AddCircleOutlineSharp/>
</IconButton>
</Box>
   <Dialog open={dailogOpen}onClose={togledailog}>
    <DialogTitle > Add New Contect</DialogTitle>
    <Box component={"form"} onSubmit={handleSubmit(Addcontect)}>
<DialogContent>



<Box sx={{width:'400px'}} mt={2}>
<Stack  spacing={2} direction={'column'}>


<TextField label="name" {...register("name")} variant="outlined" size="small" fullWidth/>
<TextField label="phone" {...register("phone")} variant="outlined" size="small" fullWidth/>
<TextField label="message" {...register("message")} variant="outlined" size="small" fullWidth />


    </Stack>
    </Box>
</DialogContent>
<DialogActions>
          <Button onClick={togledailog}>Cancel</Button>
          <Button variant="contained" sx={{bgcolor:"primary.main"}} type="submit"  size="small"> submit </Button>
 
        </DialogActions>

        </Box>

   </Dialog>
   <Divider/>
   {Contects ? < Contectlist  ContectData={contect} update={updatecontect}/> :null}
        </Box>



</>

)

}
