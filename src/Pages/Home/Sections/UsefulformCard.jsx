import React from 'react';
import { Box, Typography, InputBase, List, ListItem, Button } from '@mui/material';
import { FaSearch } from 'react-icons/fa';
import { LuPencil } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineBriefcase } from "react-icons/hi2";
import { CustomCard } from '../../../Components';

const UsefulformCard = () => {
  const items = ['תקנים', 'העסקה', 'מכירות', 'אספקה', 'היסעים', 'ניהול'];

  return (
    <CustomCard height="400px" sx={{ p: 2, display: 'flex', flexDirection: 'column', justifyContent:'space-between' }}>
      <Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <LuPencil size={18} color='#B9B9C7' />
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h6" sx={{ mr: 1 }}>טפסים שימושיים</Typography>
            <HiOutlineBriefcase color='#005050' size={20} />
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, border: "1px solid #B2B2B2", px: 2, borderRadius: '10px' }}>
          <FaSearch />
          <InputBase
            placeholder="Search"
            sx={{ ml: 1, flex: 1 }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </Box>
        <List sx={{ mb: 2, }}>
          {items.map((item, index) => (
            <ListItem key={index} sx={{ padding: 0, mb: 1, width: "100%", display: 'flex', flexDirection: 'column', justifyContent: 'end', alignItems: 'end' }}>
              <Typography variant="body2">{item}</Typography>
            </ListItem>
          ))}
        </List>
      </Box>
      <Box sx={{ borderTop: '1px solid #005050', display: 'flex', justifyContent: 'end', alignItems: 'center', gap: 1, mt: "70px" }}>
        <Typography sx={{ color: 'primary.main', alignSelf: 'center' }}>עוד</Typography>
        <IoIosArrowDown />
      </Box>
    </CustomCard>
  );
};

export default UsefulformCard;
