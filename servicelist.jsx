import { Box, Button ,IconButton} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import BorderColorIcon from '@mui/icons-material/BorderColor';
export default function Serviclist({ServiceData,update,deleteservice}){
    // console.log(ServiceData)
    const columns=[
        
            { field: '_id', headerName: 'ID', width: 90 },
            {
                field:'title',
                headerName:'title',
                width:150,
                editable:true
            },
            {
                field:'description',
                headerName:'description',
                width:150 ,
                editable:true   
            },
            {
                field:'icon',
                headerName:'icon',
                width:150,
                editable:true
            },
            {
              field:'Actions',
              headerName:'Actions',
              width:200,
              renderCell:(params)=>{
                return<Box>
                        <IconButton onClick={()=>update(params.row)}>
                       <BorderColorIcon  sx={{color:'red'}}/>
                        </IconButton>
                        <IconButton onClick={()=>deleteservice(params.row)}>
                    <DeleteForeverIcon/>
                        </IconButton>
                    </Box>
               
              }
              
            },

    ];
const rows=ServiceData ? ServiceData : null
return(
    <>
    <Box sx={{height:400,width:'100%'}}>
<DataGrid 
rows={rows}
columns={columns}
getRowId={(row) => row._id}
initialState={{
    pagination:{
        paginationModel:{
            pageSize:5
        }
    }
}}
pageSizeOptions={[5]}
disableRowSelectionOnClick
>
  
</DataGrid>
    </Box>
    
    </>
)

}



