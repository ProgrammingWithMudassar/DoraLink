import React, { useState } from 'react';
import { Typography, InputBase, Box, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './style.css'

const Navbar = () => {
    const [hoveredMenu, setHoveredMenu] = useState(null);

    const handleMenuMouseEnter = (menu) => {
        setHoveredMenu(menu);
    };

    const handleMenuMouseLeave = () => {
        setHoveredMenu(null);
    };

    const renderDropdown = (menu) => (
        <div
            className="dropdown-content"
            style={{
                display: hoveredMenu === menu ? 'block' : 'none',
                position: 'absolute',
                backgroundColor: '#fff',
                minWidth: '160px',
                boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
                zIndex: 1,
                borderRadius: '6px'
            }}
        >
            <a href="#section1" className="dropdown-item">מחלקה 1</a>
            <a href="#section2" className="dropdown-item">מחלקה 2</a>
            <a href="#section3" className="dropdown-item">מחלקה 3</a>
            <a href="#section4" className="dropdown-item">מחלקה 4</a>
        </div>
    );

    return (
        <Box position="static" sx={{ backgroundColor: '#005050', width: "100%", display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 1, px: 6 }}>
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
                    height: "35px",
                    p: 1, mr: 3,
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
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: "center", position: 'relative' }}>
                <Button variant="contained" sx={{ backgroundColor: '#ffcc00', color: '#005050', mr: 2 }}> דִיוּוּחַ</Button>
                <ul style={{ display: 'flex', justifyContent: 'center', alignItems: "center", gap: 18, listStyle: 'none', padding: 0, position: 'relative' }}>
                    <li style={{ color: '#ffffff', marginRight: 2 }}>עמוד הבית</li>
                    <li
                        style={{ color: '#ffffff', marginRight: 2, position: 'relative', cursor:'pointer' }}
                        onMouseEnter={() => handleMenuMouseEnter('option1')}
                        onMouseLeave={handleMenuMouseLeave}
                    >
                        אופציה 1
                        {renderDropdown('option1')}
                    </li>
                    <li
                        style={{ color: '#ffffff', marginRight: 2, position: 'relative', cursor:'pointer' }}
                        onMouseEnter={() => handleMenuMouseEnter('option2')}
                        onMouseLeave={handleMenuMouseLeave}
                    >
                        אופציה 2
                        {renderDropdown('option2')}
                    </li>
                    <li
                        style={{ color: '#ffffff', marginRight: 2, position: 'relative', cursor:'pointer' }}
                        onMouseEnter={() => handleMenuMouseEnter('option3')}
                        onMouseLeave={handleMenuMouseLeave}
                    >
                        אופציה 3
                    </li>
                </ul>
            </Box>
        </Box>
    );
};

export default Navbar;
