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
import {Gethomesit,POsthomesit,Updatehomesit}from './GuryoApi'
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
            const {data}=await Gethomesit()
           
            setguri(data)
        }
        guryaha();
    })

    const AddGuryo=async(data)=>{
  if(gid!==""){
    await Updatehomesit(gid,data)
    console.log("data  has ben updated")
    togledailog()
    reset()
  }
  else{
    await POsthomesit(data)
    console.log("data has been saved")
    togledailog()
    reset()
  }
    }
    
    const UpdatedGuryoinfor=async(data)=>{
        setValue("name",data.name)
        setValue("title",data.title)
        setValue("logo",data.logo)
        setValue("description",data.description)
        setValue("address",data.address)
        setValue("email",data.email)
        setValue("phone",data.phone)
        setValue("whatapp",data.whatapp)
        setValue("facebook",data.facebook)
        setValue("instagram",data.instagram)
        setValue("Herotitle",data.Herotitle)
        setValue ("HeroDiscritpion",data.HeroDiscritpion)
        setValue("heroimage",data.faafaahin)
        setValue("Footertext",data.Footertext)
        setgid(data._id)
        togledailog();
    }


    return (
        <>
        
       
     
        <Box>
    <Divider sx={{height:10}}/>
<Box>
    <Alert severity="info">List Xogta shirkada </Alert>
</Box>
<Box sx={{display:'flex', justifyContent:'space-between'}} my={4}>
<Typography variant="h6">Lis xogta</Typography>
<IconButton onClick={togledailog}>
    <AddCircleOutlineSharp/>
</IconButton>
</Box>
   <Dialog open={dailogopen}onClose={togledailog}>
    <DialogTitle > Add New xog</DialogTitle>
    <Box component={"form"} onSubmit={handleSubmit(AddGuryo)}>
<DialogContent>



<Box sx={{width:'400px'}} mt={2}>
<Stack  spacing={5} direction={'column'}>


<TextField label="name" {...register("name")} variant="outlined" size="small" fullWidth/>
<TextField label="title" {...register("title")} variant="outlined" size="small" fullWidth/>
<TextField label="logo" {...register("logo")} variant="outlined" size="small" fullWidth />
<TextField label="description" {...register("description")} variant="outlined" size="small" fullWidth/>
<TextField label="age" {...register("age")} variant="outlined" size="small" fullWidth/>
<TextField label="address" {...register("address")} variant="outlined" size="small" fullWidth />
<TextField label="email" {...register("email")} variant="outlined" size="small" fullWidth/>
<TextField label="phone" {...register("phone")} variant="outlined" size="small" fullWidth/>
<TextField label="whatapp" {...register("whatapp")} variant="outlined" size="small" fullWidth />
<TextField label="facebook" {...register("facebook")} variant="outlined" size="small" fullWidth/>
<TextField label="instagram" {...register("instagram")} variant="outlined" size="small" fullWidth/>
<TextField label="Herotitle" {...register("Herotitle")} variant="outlined" size="small" fullWidth />
<TextField label="HeroDiscritpion" {...register("HeroDiscritpion")} variant="outlined" size="small" fullWidth/>
<TextField label="heroimage" {...register("instagram")} variant="outlined" size="small" fullWidth/>
<TextField label="Footertext" {...register("Herotitle")} variant="outlined" size="small" fullWidth />

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
 
        </Box>
        
        
        </>
    )
}