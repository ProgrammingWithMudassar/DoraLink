import React from 'react';
import { Box, Typography, List, ListItem } from '@mui/material';
import { HiOutlineFolderOpen } from "react-icons/hi2";
import { CustomCard } from '../../../Components';

const JobCard = () => {
  const jobs = [
    { id: '298388', title: 'מפתח/ת פיתוח איריונות מפעל אסם שדרות', company: 'ממשרה' },
    { id: '298388', title: 'מפתח/ת פיתוח איריונות מפעל אסם שדרות', company: 'ממשרה' },
    { id: '298388', title: 'מפתח/ת פיתוח איריונות מפעל אסם שדרות', company: 'ממשרה' },
    { id: '298388', title: 'מפתח/ת פיתוח איריונות מפעל אסם שדרות', company: 'ממשרה' },
  ];

  return (
    <CustomCard height="330px" sx={{ p: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center', mb: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h6" sx={{ mr: 1, fontWeight: 600 }}>משרות פתוחות</Typography>
          <HiOutlineFolderOpen size={18}/>
        </Box>
      </Box>
      <List sx={{ mb: 2 }}>
        {jobs.map((job, index) => (
          <ListItem
            key={index}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 1,
              p: 1,
              py:2,
              border: '1px solid #e0e0e0',
              background:"#FAFAFA",
              borderRadius: 2,
            }}
          >
            <Box sx={{ width:'100%' ,display: 'flex', alignItems:'center', justifyContent:'space-between'  }}>
              <Typography sx={{fontSize:'13px' }}>{job.id} {job.company}</Typography>
              <Typography sx={{fontSize:'13px' }}>{job.title}</Typography>
            </Box>
          </ListItem>
        ))}
      </List>
    </CustomCard>
  );
};

export default JobCard;
