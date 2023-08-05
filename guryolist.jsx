import { Box ,Divider,IconButton, Stack, Typography} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Chip from '@mui/material/Chip'; 
import { DataGrid } from '@mui/x-data-grid';
import React, { useState } from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { Link } from 'react-router-dom';
export default function Gurilist({GuriData,update}) {

  const [dailOpen,setDail] = useState(false);
  const [HomeInformation,setXogta] = useState()   
  const Toggle = () => {
        setDail(!dailOpen)
   } 
  
   
  const seeMore = (data) => {
     console.log(data)
    setXogta(data)
    Toggle()
}
const columns = [
        
  {
    field: 'noocaguriga',
    headerName: 'noocaguriga',
    width: 150,
    editable: true,
    renderCell:(params)=>{
      return <Box> {params.row.noocaguriga}  {" "}
<Chip size='small'  onClick={()=>seeMore(params.row)} label="see more" variant='outlined' />
    console.log(seemore)
      </Box>
    }
  },
  {
    field: 'area',
    headerName: 'area',
    width: 150,
    editable: true,
  },
  {
      field: 'rent',
      headerName: 'rent',
      width: 150,
      editable: true,
    },
  {
    field:"Actions",
    headerName:"Actions",
    width:200,
    renderCell:(params)=>{

      return <Box>
        <IconButton onClick={()=>update(params.row)}>
          <BorderColorIcon sx={{color:"primary.main"}}/>
        </IconButton>
        
      </Box>
    }
  },
  {
    headerName:'images',
    renderCell:(params)=>{
      return <Link to={'/dasboard/image'}>Image folder</Link>
    }
  }

  



];
 const rows= GuriData ? GuriData : null
    

  return (
   <>
       <Box sx={{ height: 400, width: '100%' }}>
         {/* Dialog */}
     <Dialog
       open={dailOpen}
      onClose={Toggle}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description">
      <DialogTitle id="alert-dialog-title">
       Type : {" "} {HomeInformation?.noocaguriga}  || Status : {" "} {HomeInformation?.houseStatus}
      </DialogTitle>
  <DialogContent>
    <DialogContentText id="alert-dialog-description">

   <Stack direction={'column'} spacing={2}>
          <Box sx={{p:2,width:500}}>

        <Box sx={{display:'flex', gap:2, alignItems:'center'}}>
        <Typography variant={'h6'}> Addres : </Typography>
        <Box>{HomeInformation?.address}</Box>
        </Box>
        <Divider/>
        <Stack direction={'row'}>
        <Box sx={{display:'flex', gap:2, alignItems:'center'}}>
        <Typography variant={'h6'}>  Age : </Typography>
        <Box>{HomeInformation?.age}</Box>
        </Box>
        </Stack>
        <Divider/>
       
        <Stack direction={'row'} spacing={1}>
        <Box sx={{display:'flex', gap:2, alignItems:'center'}}>
        <Typography variant={'h6'}> Rent : </Typography>
        <Box>{HomeInformation?.rent}</Box>
        </Box>
        <Divider/>

        <Box sx={{display:'flex', gap:2, alignItems:'center'}}>
        <Typography variant={'h6'}>  Deposit : </Typography>
        <Box>{HomeInformation?.deposite}</Box>
        </Box>
        </Stack>
        <Divider/>

        <Box sx={{display:'flex', gap:2, alignItems:'center'}}>
        <Typography variant={'h6'}>  Parking: </Typography>
        <Box>{HomeInformation?.parkin}</Box>
        </Box>
        <Divider/>   

        <Stack direction={'row'} spacing={1}>
        <Box sx={{display:'flex', gap:2, alignItems:'center'}}>
        <Typography variant={'h6'}>  Rooms : </Typography>
        <Box>{HomeInformation?.rooms}</Box>
        </Box>
        <Divider/>

        <Box sx={{display:'flex', gap:2, alignItems:'center'}}>
        <Typography variant={'h6'}> suuliyada : </Typography>
        <Box>{HomeInformation?.suuliyada}</Box>
        </Box>
        </Stack>
        <Divider/>

        <Stack direction={'row'} spacing={1}>
        <Box sx={{display:'flex', gap:2, alignItems:'center'}}>
        <Typography variant={'h6'}>  faafahin: </Typography>
        <Box>{HomeInformation?.faafaahin}</Box>
        </Box>
        <Divider/>

        <Box sx={{display:'flex', gap:2, alignItems:'center'}}>
        <Typography variant={'h6'}>  MasterRoom : </Typography>
        <Box>{HomeInformation?.masterroom}</Box>
        </Box>
        </Stack>
        <Divider/>

        

        </Box>
    </Stack>

          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={Toggle} autoFocus>Close</Button>
        </DialogActions>
      </Dialog>
        
        {/*  */}
      <DataGrid
    
       rows={rows}
        columns={columns}
         getRowId={(row) => row._id}
          initialState={{
            pagination: {
             paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
     
        disableRowSelectionOnClick
      />

    </Box>
   </>
  )
}