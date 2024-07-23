import React from 'react';
import { Box, Typography, Button, CardMedia } from '@mui/material';
import { FaLink } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { CustomCard } from '../../../Components';

const UsefulformCard = () => {
  const items = [
    {
      title: 'מדריך למשתמש המתחיל',
      description: 'טקסט הסבר קצר על המדריך',
      image: 'Info1.png', // Replace with actual image URL
    },
    {
      title: 'מדריך למשתמש המתחיל',
      description: 'טקסט הסבר קצר על המדריך',
      image: 'Info1.png', // Replace with actual image URL
    },
    {
      title: 'מדריך למשתמש המתחיל',
      description: 'טקסט הסבר קצר על המדריך',
      image: 'Info1.png', // Replace with actual image URL
    },
  ];

  return (
    <CustomCard height="400px" sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center', gap: 1, mb: 2 }}>
        <Typography variant="h6">מידע שימושי</Typography>
        <FaLink color='#005050' size={20} />
      </Box>
      <Box sx={{ flexGrow: 1, overflowY: 'auto' }}>
        {items.map((item, index) => (
          <Box key={index} sx={{ display: 'flex', mb: 2 }}>
            <CardMedia
              component="img"
              image={item.image}
              alt={item.title}
              sx={{ width: 80, height: 80, borderRadius: 2, mr: 2 }}
            />
            <Box sx={{ width: '100%', display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'end' }}>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>{item.title}</Typography>
              <Typography variant="body2" >{item.description}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
      <Box sx={{ borderTop: '1px solid #005050', display:'flex', justifyContent:'end', alignItems:'center', gap:1, mt: 2 }}>
        <Typography sx={{ color: 'primary.main', alignSelf: 'center' }}>עוד</Typography>
        <IoIosArrowDown />
      </Box>
    </CustomCard>
  );
};

export default UsefulformCard;
