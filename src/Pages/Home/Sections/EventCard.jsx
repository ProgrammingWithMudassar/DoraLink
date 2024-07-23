import React from 'react';
import { Box, Typography, List, ListItem, Button, IconButton, Divider } from '@mui/material';
import { FaCalendarAlt, FaEllipsisH } from 'react-icons/fa';
import { CustomCard } from '../../../Components';

const EventCard = () => {
  const events = [
    { title: 'ביקורת בונה', time: 'Today - 11:30 AM', date: 'Dec 24' },
    { title: 'ביקורת בונה', time: 'Today - 11:30 AM', date: 'Dec 24' },
    { title: 'ביקורת בונה', time: 'Today - 11:30 AM', date: 'Dec 24' },
    { title: 'ביקורת בונה', time: 'Today - 11:30 AM', date: 'Dec 24' },
  ];

  return (
    <CustomCard height="400px" sx={{ p: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="body2" sx={{ mr: 1 }}>2024 היום 13 אפריל</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h6" sx={{ mr: 1 }}>אירועים</Typography>
          <FaCalendarAlt />
        </Box>
      </Box>
      <List sx={{ mb: 2 }}>
        {events.map((event, index) => (
          <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1, border: '1px solid #e0e0e0', borderRadius: 1, px: 1, py: 0.2, background: '#FAFAFA' }}>
            <FaEllipsisH color='#B9B9C7' size={20} />
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: "center", gap: 4 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography sx={{ fontSize: '16px' }}>{event.title}</Typography>
                <Typography sx={{ fontSize: '10px', color: '#686868' }}>{event.time}</Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="h6" sx={{ fontweight: 600 }}>{event.date.split(' ')[1]}</Typography>
                <Typography sx={{ fontSize: '12px' }}>{event.date.split(' ')[0]}</Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </List>
      <Box sx={{ width:"100%", textAlign:'center'}}>
        <Button variant="contained" sx={{ color: '#005050', alignSelf: 'center', background: "#25CCC0", fontSize: "12px", fontWeight: 600 }}>פתח לוח שנה</Button>
      </Box>
    </CustomCard>
  );
};

export default EventCard;
