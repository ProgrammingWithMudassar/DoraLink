import React from 'react';
import { Card, Typography, Box, Avatar, IconButton } from '@mui/material';
import {CustomCard} from '../../../Components'; 
import { BsEnvelope } from "react-icons/bs";
import { BiBrushAlt } from "react-icons/bi";
import { IoSettingsOutline, IoGiftOutline  } from "react-icons/io5";

const CelebrationCard = () => {
  const users = [
    { name: 'דניאל יהודה', role: 'עובדת צוות עיצוב', date: '28/04/98', image: 'C1.png' },
    { name: 'עופר נחום', role: 'מנהל השפיות', date: '28/04/98', image: 'C1.png' },
    { name: 'רועי כהן', role: 'צוות מכירות', date: '28/04/98', image: 'C1.png' },
    { name: 'מעיין לוין', role: 'משאבי אנוש', date: '28/04/98', image: 'C1.png' },
  ];

  return (
    <CustomCard height="332px" >
      <Box sx={{ width:"100%", display: 'flex', alignItems:"center", justifyContent: 'space-between', mb:2 }}>
        <IoSettingsOutline size={18} color='#B9B9C7'/>
        <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', fontWeight: 600, color: "#005050" }}>
          חוגגים החודש
          <IoGiftOutline  style={{ marginLeft: '8px' }} />
        </Typography>
      </Box>
      {users.map((user, index) => (
        <Box
          key={index}
          sx={{
            display: 'flex',
            alignItems: 'center',
            mb: 2,
            justifyContent: 'space-between',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', mr: 2 }}>
              <BiBrushAlt size={16} color='#26CCC2' />
              <Typography variant="body2" sx={{ marginRight: '8px', fontSize: "10px", fontWeight: 600 }}>{user.date}</Typography>
            </Box>
            <IconButton sx={{ padding: 0 }}><BsEnvelope size={18} color='#005050' /></IconButton>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ textAlign: 'right' }}>
              <Typography variant="body1">{user.name}</Typography>
              <Typography variant="body2">{user.role}</Typography>
            </Box>
            <Avatar src={user.image} alt={user.name} sx={{ width: 40, height: 40, marginLeft: '8px' }} />
          </Box>
        </Box>
      ))}
    </CustomCard>
  );
};

export default CelebrationCard;
