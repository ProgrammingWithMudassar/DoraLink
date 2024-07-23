import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, InputBase, Box, Button, Menu, MenuItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedMenu, setSelectedMenu] = useState(null);

    const handleMenuOpen = (event, menu) => {
        setAnchorEl(event.currentTarget);
        setSelectedMenu(menu);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        setSelectedMenu(null);
    };

    const renderMenu = (menu) => (
        <Menu
            anchorEl={anchorEl}
            open={selectedMenu === menu}
            onClose={handleMenuClose}
            MenuListProps={{ onMouseLeave: handleMenuClose, sx: { overflow: 'visible' } }}
            PaperProps={{
                sx: {
                    overflow: 'visible',
                    mt: 1,
                    '& .MuiMenuItem-root': {
                        whiteSpace: 'nowrap'
                    }
                }
            }}
        >
            <MenuItem onClick={handleMenuClose}>מחלקה 1</MenuItem>
            <MenuItem onClick={handleMenuClose}>מחלקה 2</MenuItem>
            <MenuItem onClick={handleMenuClose}>מחלקה 3</MenuItem>
            <MenuItem onClick={handleMenuClose}>מחלקה 4</MenuItem>
        </Menu>
    );

    return (
        <Box position="static" sx={{ backgroundColor: '#046b64', width:"100%", display:'flex', justifyContent:'space-between', alignItems:'center', p:1, px:6 }}>
            <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
                <img src="Logo.png" alt="Logo" />
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: '#fff',
                    borderRadius: '8px',
                    width: '350px',
                    height:"35px",
                    p: 1, mr:3,
                    boxShadow: 1,
                }}
            >
                <SearchIcon sx={{ color: '#73738C', mr: 1 }} />
                <InputBase 
                    placeholder="חפש איש קשר" 
                    sx={{ 
                        color: '#000', 
                        flexGrow: 1,
                        '& .MuiInputBase-input': {
                            padding: '8px 0',
                        }
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                />
                
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: "center" }}>
                <Button variant="contained" sx={{ backgroundColor: '#ffcc00', color: '#005050', mr: 2 }}> דִיוּוּחַ</Button>
                <ul style={{ display: 'flex', justifyContent: 'center', alignItems: "center", gap: 18, listStyle: 'none', padding: 0 }}>
                    <li style={{ color: '#ffffff', marginRight: 2 }}>עמוד הבית</li>
                    <li style={{ color: '#ffffff', marginRight: 2 }} onMouseEnter={(e) => handleMenuOpen(e, 'option1')}>אופציה 1</li>
                    <li style={{ color: '#ffffff', marginRight: 2 }} onMouseEnter={(e) => handleMenuOpen(e, 'option2')}>אופציה 2</li>
                    <li style={{ color: '#ffffff', marginRight: 2 }} onMouseEnter={(e) => handleMenuOpen(e, 'option3')}>אופציה 3</li>
                </ul>
            </Box>
            {renderMenu('option1')}
            {renderMenu('option2')}
            {renderMenu('option3')}
        </Box>
    );
};

export default Navbar;
