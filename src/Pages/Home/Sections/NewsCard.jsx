import React from 'react';
import { Box, Typography, List, ListItem } from '@mui/material';
import {CustomCard} from '../../../Components'; 
import { SlBookOpen } from "react-icons/sl";
import { CiBellOn } from "react-icons/ci";

const newsItems = [
  "שימו לב לעדכון האבטחה בגישה למערכת עם חדש",
  "שימו לב לעדכון האבטחה בגישה למערכת עם חדש",
  "שימו לב לעדכון האבטחה בגישה למערכת עם חדש",
  "שימו לב לעדכון האבטחה בגישה למערכת עם חדש",
  "שימו לב לעדכון האבטחה בגישה למערכת עם חדש",
  "שימו לב לעדכון האבטחה בגישה למערכת עם חדש",
  "שימו לב לעדכון האבטחה בגישה למערכת עם חדש"
];

const NewsCard = () => {
  return (
    <CustomCard height="450px">
        <Typography sx={{ width:'100%', fontWeight:600, display: 'flex', justifyContent: 'end', alignItems: 'center', gap:2, color:"#005050" }}>חדשות ועדכונים <SlBookOpen /></Typography>
      <List>
        {newsItems.map((item, index) => (
          <ListItem key={index} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1 }}>
            <Typography variant="body1" color="#005050" sx={{ fontSize:'14px' }}>{item}</Typography>
            <Box sx={{ background:"#F0E1A7",width:"35px",height:"35px", borderRadius:'10px', display:'flex', justifyContent: 'center', alignItems: 'center' }}>
              <CiBellOn style={{ color: '#F2A61C' }} size={26} />
            </Box>
          </ListItem>
        ))}
      </List>
    </CustomCard>
  );
};

export default NewsCard;
