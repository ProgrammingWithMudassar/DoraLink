import React from 'react'
import { Box, Typography } from '@mui/material'
import Wrapper from './shared/Wrapper'

const Footer = () => {
    return (
        <>
            <Box sx={{ Width: '100%', background: "#005050", py: 2, mt:3 }}>
                <Wrapper>
                    <Box sx={{ height: '2px', background: '#EEEEEE' }}></Box>
                    <Typography variant="body1" color="#fff" sx={{ width: "100%", textAlign: 'center', fontWeight: 300, fontSize: '12px', color: "#EEEEEE", mt:2 }}>@ Copyright 2024, All Rights Reserved</Typography>
                </Wrapper>
            </Box>
        </>
    )
}

export default Footer
