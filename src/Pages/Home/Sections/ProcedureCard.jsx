import React from 'react';
import { Box, Typography, List, ListItem, IconButton } from '@mui/material';
import { BsInfoSquare } from "react-icons/bs";
import { LuUsers } from "react-icons/lu";
import { TbFlag3 } from "react-icons/tb";
import { HiOutlineFolderOpen } from "react-icons/hi2";
import { CustomCard } from '../../../Components';

const GuideCard = () => {
  const items = [
    { text: 'מערכות מידע', icon: <BsInfoSquare size={16}  color='#20E300'/>, iconBgColor: '#D3FFCC' },
    { text: 'משאבי אנוש', icon: <LuUsers size={16} color='#FF3566'/>, iconBgColor: '#FFD6E0'},
    { text: 'מערכות מידע', icon: <TbFlag3 size={16} color='#3575FF'/>, iconBgColor: '#D3E1FF' },
    { text: 'משאבי אנוש', icon: <TbFlag3 size={16} color='#3575FF'/>, iconBgColor: '#D3E1FF' },
  ];

  return (
    <CustomCard height="330px" sx={{ p: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center', mb: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h6" sx={{ mr: 1,  fontWeight: 600}}>מדריכים</Typography>
          <HiOutlineFolderOpen size={18} />
        </Box>
      </Box>
      <List sx={{ mb: 2 }}>
        {items.map((item, index) => (
          <ListItem
            key={index}
            sx={{
              display: 'flex',
              justifyContent: 'end',
              alignItems: 'center',
              gap:2,
              mb: 1,
              p: 1,
              border: '1px solid #e0e0e0',
              borderRadius: 2,
              background: '#FAFAFA',
            }}
          >
            <Typography variant="body1">{item.text}</Typography>
            <Box sx={{ px:1,pt:0.4, height:'33px', borderRadius: '5px', backgroundColor: item.iconBgColor }}>
              <IconButton sx={{ color: '#fff', p: 0 }}>
                {item.icon}
              </IconButton>
            </Box>
          </ListItem>
        ))}
      </List>
    </CustomCard>
  );
};

export default GuideCard;
