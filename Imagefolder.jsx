import { useState } from "react";
import { storage } from './firebase';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

import {Box,Button,Stack, TextField} from '@mui/material'
export default function Images() {
    const [imgUrl, setImgUrl] = useState(null);
    const [progresspercent, setProgresspercent] = useState(0);
  
    const handleSubmit = (e) => {
      e.preventDefault()
      const file = e.target[0]?.files[0]
      if (!file) return;
      const storageRef = ref(storage, `files/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
  
      uploadTask.on("state_changed",
        (snapshot) => {
          const progress =
            Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          setProgresspercent(progress);
        },
        (error) => {
          alert(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImgUrl(downloadURL)
          });
        }
      );
    }
 
    return (
        
        <>
        
        <Box component={'form'} onSubmit={handleSubmit}>
            <Stack direction={'column'} spacing={2}>
                <TextField type="file" variant="outlined"  />
                <Button variant="contained" size="small" type="submit">Upload</Button>
            </Stack>
        </Box>
        {
        !imgUrl &&
        <div className='outerbar'>
          <div className='innerbar' style={{ width: `${progresspercent}%` }}>{progresspercent}%</div>
        </div>
      }
      {
        imgUrl &&
        <img src={imgUrl} alt='uploaded file' height={200} />
      }
    
        </>
    )
}
