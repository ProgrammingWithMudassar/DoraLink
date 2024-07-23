import React from 'react';
import { CustomCard } from '../../../Components';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const WelcomeCard = () => {
    return (
        <CustomCard height="450px">
            <Box sx={{ color: 'white' }}>
                <img
                    src="welcome.png"
                    alt="Welcome Image"
                    style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                />
                <Box sx={{ width: '100%' }}>
                    <Typography sx={{ width:'100%', fontWeight:600, color:"#005050",display:'flex', justifyContent: 'end'  }}>ברוכים הבאים לפורטל החדש!</Typography>
                    <Typography sx={{ width:'100%', color:"#005050",display:'flex', justifyContent: 'end'  }}>טקסט מתחלף המסביר בכמה מילים את הכותרות המופיעות מתחת לתמונה</Typography>
                </Box>
            </Box>
        </CustomCard>
    );
}

export default WelcomeCard;
