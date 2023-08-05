import { Box, Button ,IconButton} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import BorderColorIcon from '@mui/icons-material/BorderColor';

export default function Contectlist({ContectData,update}) {
    const columns = [
        { field: '_id', headerName: 'ID', width: 90 },

        {
          field: 'name',
          headerName: 'name',
          width: 150,
          editable: true,
        },

        {
          field: 'phone',
          headerName: 'phone',
          width: 150,
          editable: true,
        },

        {
            field: 'message',
            headerName: 'message',
            width: 150,
            editable: true,
          },

        {
          field:"Actions",
          headerName:"Actions",
          width:200,
          renderCell:(params)=>{

            return <Box>

              <IconButton onClick={()=>update(params.rows)}>

                <BorderColorIcon sx={{color:"primary.main"}}/>
              </IconButton>
             
              
            </Box>
          }
        },
      
      ];

      

      const rows= ContectData ? ContectData : null
    

  return (
   <>
       <Box sx={{ height: 400, width: '100%' }}>
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
