import { Box,Stack,IconButton,Typography,Alert,TextField,Button, Divider, Icon, } from "@mui/material"
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CircularProgress from '@mui/material/CircularProgress';
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AddCircleOutlineSharp, ClassSharp } from "@mui/icons-material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {Getservice,postservice,putservice} from './servicapi'
import Serviclist from "./servicelist";
import { Link } from "react-router-dom";

export const Services=()=>{
    const [sid,setsid]=useState("")
    const {register,handleSubmit,reset,setValue,formState:{errors}} = useForm()
    const [dailogOpen,setDailogopen]=useState(false)
    const togledailog=()=>{
        setDailogopen(!dailogOpen)
    }
    const [service,setservice]=useState([])
    useEffect(()=>{
const Allservice=async()=>{
    const {data}=await Getservice()
  
    setservice(data)
}
Allservice()
})
const Addservice = async (data)=>{

    if(sid !==''){

 try{
  await putservice(sid,data)
console.log("Data has been Updated")
togledailog()
reset()
    } catch( err){
console.log("error ayaa jira ",err)

    }
    }
    else {
        try{
            await postservice(data)
          console.log("Data has been saved")
          togledailog()
          reset()
              } catch( err){
          console.log("error ayaa jira ",err)
          
              }

    }
   
}
const updateserviceinfo =async(data)=>{
    setValue("title",data.title)
    setValue("description",data.description)
    setValue("icon", data.icon)
    setsid(data._id)
    togledailog()

}
const Deletserviceinfo =async(data)=>{
    console.log(data)
}
    return(
      <>
      
      <Box>
    <Divider sx={{height:10}}/>
<Box>
    <Alert severity="info">List Cleint </Alert>
</Box>
<Box sx={{display:'flex', justifyContent:'space-between'}} my={4}>
<Typography variant="h6">Lis cleints</Typography>
<IconButton onClick={togledailog}>
    <AddCircleOutlineSharp/>
</IconButton>
</Box>
   <Dialog open={dailogOpen}onClose={togledailog}>
    <DialogTitle > Add New Cleint</DialogTitle>
    <Box component={"form"} onSubmit={handleSubmit(Addservice)}>
<DialogContent>



<Box sx={{width:'400px'}} mt={2}>
<Stack  spacing={2} direction={'column'}>


<TextField label="Title" {...register("title")} variant="outlined" size="small" fullWidth/>
<TextField label="Description" {...register("description")} variant="outlined" size="small" fullWidth/>
<TextField label="icon" {...register("icon")} variant="outlined" size="small" fullWidth/>


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
   {Services ? <Serviclist deleteservice={Deletserviceinfo} ServiceData={service} update={updateserviceinfo}/> :null}
        </Box>
      
      </>
    )
}