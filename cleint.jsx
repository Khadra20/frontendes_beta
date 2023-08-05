import { Box,Stack,IconButton,Typography,Alert,TextField,Button, Divider, Breadcrumbs} from "@mui/material"
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
import { Link } from "react-router-dom";
import {postcleint,GetCleints,puclaient,deletecleint} from './Apicleint'
import ClientList from "./cleintlist";
export const Cleints=()=>{
    const [colid,setcolid]=useState("")
    const {register,handleSubmit,reset,setValue,formState:{errors}} = useForm()
    const [dailogOpen,setdailog]=useState(false)
    const togledailog=()=>{
        setdailog(!dailogOpen)
    }
   
const [cleint,setClient] = useState([])
   
useEffect(()=>{
    const allClients =  async ()=>{
        
        const {data} = await  GetCleints()
    
        // console.log(data)

        setClient(data)
    }

    allClients()


},[])

const AddNewClient = async (data)=>{

    if(colid !==''){

 try{
  await puclaient(colid,data)
console.log("Data has been Updated")
togledailog()
reset()
    } catch( err){
console.log("error ayaa jira ",err)

    }
    }
    else {
        try{
            await postcleint(data)
          console.log("Data has been saved")
          togledailog()
          reset()
              } catch( err){
          console.log("error ayaa jira ",err)
          
              }

    }
    
  
   
}
const updatedata = async (data)=>{
    // console.log("xogta la rabbo in la update gareeyo",data)
        setValue("cleintname",data.cleintname)
        setValue("clientlogo",data.clientlogo)
        setcolid(data._id)
        togledailog()
    
    }

const deletcleintinfo =async(data)=>{
    console.log(data)
 
}


   
    return <>
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
    <Box component={"form"} onSubmit={handleSubmit(AddNewClient)}>
<DialogContent>



<Box sx={{width:'400px'}} mt={2}>
<Stack  spacing={2} direction={'column'}>



<TextField label="Client Name" {...register("cleintname")} variant="outlined" size="small" fullWidth/>

<TextField label="Client logo" variant="outlined" {...register("clientlogo")} size="small" fullWidth/>

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
   {Cleints ? <ClientList  deletecleint={deletcleintinfo} clientsData={cleint} update={updatedata} /> : null }
        </Box>
        </>
      
    
}