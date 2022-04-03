import React from "react";
import { useState } from "react";
import { Button, Container } from "@mui/material";
import { AppBar, Toolbar, Typography, Box, Menu, MenuItem, Avatar } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"
import logo from '../../images/logo.png';

const pages = ['Contact US', 'Blog', 'Destinations', 'Home'];
const HomeBar = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const theme = createTheme({
        typography: {
            fontFamily: [
                '"Open sans"',
                'Helvetica',
                'Arial',
                'sans-serif'
            ].join(','),
            background: '#e6e6e6'
        },
    });

    return (
        <>
            <ThemeProvider theme={theme}>
                <AppBar style={{
                    background: 'white'
                }} position="static">
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>

                            <Box alignItems={"center"} sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                <img src={logo} />
                                <Typography
                                    variant="h4"
                                    noWrap
                                    component="div"
                                    color={"black"}
                                    sx={{ mr: 2, fontWeight: 'bold' }}
                                >
                                    ADORE BALI
                                </Typography>

                            </Box>

                            <Box alignItems={"center"} sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                                <img src={logo} />
                                <Typography
                                    variant="h4"
                                    noWrap
                                    component="div"
                                    color={"black"}
                                    sx={{ mr: 2, fontWeight: 'bold' }}
                                >
                                    ADORE BALI
                                </Typography>F
                            </Box>

                            <Box sx={{
                                flexGrow: 1, display: { xs: 'flex', md: 'none' }, flexDirection: 'row-reverse'
                            }}>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenNavMenu}
                                    color="inherit"
                                >
                                    <MenuIcon style={{ color: 'black' }} />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorElNav}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    open={Boolean(anchorElNav)}
                                    onClose={handleCloseNavMenu}
                                    sx={{
                                        display: { xs: 'block', md: 'none' },
                                    }}
                                >
                                    {pages.map((page) => (
                                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                                            <Typography textAlign="center">{page}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, flexDirection: 'row-reverse' }}>
                                {pages.map((page) => (
                                    <Button
                                        key={page}
                                        onClick={handleCloseNavMenu}
                                        sx={{ my: 2, color: 'black', display: 'block', fontWeight: 'bold' }}
                                    >
                                        {page}
                                    </Button>
                                ))}
                            </Box>


                        </Toolbar>
                    </Container>
                </AppBar>
            </ThemeProvider>
        </>
    )

}

export default HomeBar;