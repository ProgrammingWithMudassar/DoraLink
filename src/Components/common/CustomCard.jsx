import { Box } from '@mui/material';
import React from 'react';

const CustomCard = ({ children, height }) => {
  return (
    <Box sx={{ p: 2, boxShadow: '0 0 8px 2px #EFEFF0', borderRadius: '6px', height, background:"#fff"}}>
      {children}
    </Box>
  );
};

export default CustomCard;
