import React from "react";
import { Box,Stack,IconButton,Typography,Alert,TextField,Button, Divider, Icon, } from "@mui/material"
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {POstguryo,UpdateGuryo,GetGuryo}from './GuryoApi'
import { AddCircleOutlineSharp, ClassSharp } from "@mui/icons-material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Gurilist from './guryolist'
export const Guryo=()=>{
    const [gid,setgid]=useState("")
    const {register,handleSubmit,reset,setValue,formState:{errors}} = useForm()
    const [dailogopen,setdailogopen]=useState(false)
    const togledailog=()=>{
        setdailogopen(!dailogopen)
    }

    const [Guri,setguri]=useState([])
    useEffect(()=>{
        const guryaha=async()=>{
            const {data}=await GetGuryo()
           
            setguri(data)
        }
        guryaha();
    })

    const AddGuryo=async(data)=>{
  if(gid!==""){
    await UpdateGuryo(gid,data)
    console.log("data  has ben updated")
    togledailog()
    reset()
  }
  else{
    await POstguryo(data)
    console.log("data has been saved")
    togledailog()
    reset()
  }
    }
    
    const UpdatedGuryoinfor=async(data)=>{
        setValue("noocaguriga",data.noocaguriga)
        setValue("area",data.area)
        setValue("address",data.address)
        setValue("age",data.age)
        setValue("rent",data.rent)
        setValue("deposite",data.deposite)
        setValue("parkin",data.parkin)
        setValue("imagepreview",data.imagepreview)
        setValue("isavalible",data.isavalible)
        setValue("rooms",data.rooms)
        setValue("suuliyada",data.suuliyada)
        setValue ("masterroom",data.masterroom)
        setValue("faafaahin",data.faafaahin)
        setgid(data._id)
        togledailog();
    }


    return (
        <>
        
       
     
        <Box>
    <Divider sx={{height:10}}/>
<Box>
    <Alert severity="info">List Guryo </Alert>
</Box>
<Box sx={{display:'flex', justifyContent:'space-between'}} my={4}>
<Typography variant="h6">Lis guryo</Typography>
<IconButton onClick={togledailog}>
    <AddCircleOutlineSharp/>
</IconButton>
</Box>
   <Dialog open={dailogopen}onClose={togledailog}>
    <DialogTitle > Add New guri</DialogTitle>
    <Box component={"form"} onSubmit={handleSubmit(AddGuryo)}>
<DialogContent>



<Box sx={{width:'400px'}} mt={2}>
<Stack  spacing={5} direction={'column'}>


<TextField label="Type" {...register("noocaguriga")} variant="outlined" size="small" fullWidth/>
<TextField label="area" {...register("area")} variant="outlined" size="small" fullWidth/>
<TextField label="address" {...register("address")} variant="outlined" size="small" fullWidth />
<TextField label="rent" {...register("rent")} variant="outlined" size="small" fullWidth/>
<TextField label="age" {...register("age")} variant="outlined" size="small" fullWidth/>
<TextField label="deposite" {...register("deposite")} variant="outlined" size="small" fullWidth />
<TextField label="parkin" {...register("parkin")} variant="outlined" size="small" fullWidth/>
<TextField label="imagepreview" {...register("imagepreview")} variant="outlined" size="small" fullWidth/>
<TextField label="isavalible" {...register("isavalible")} variant="outlined" size="small" fullWidth />
<TextField label="rooms" {...register("rooms")} variant="outlined" size="small" fullWidth/>
<TextField label="suuliyada" {...register("suuliyada")} variant="outlined" size="small" fullWidth/>
<TextField label="masterroom" {...register("masterroom")} variant="outlined" size="small" fullWidth />
<TextField label="faafaahin" {...register("faafaahin")} variant="outlined" size="small" fullWidth/>



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
   {Guryo ? < Gurilist  GuriData={Guri} update={UpdatedGuryoinfor}/> :null}
        </Box>
        
        
        </>
    )
}