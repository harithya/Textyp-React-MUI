import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Box, Container } from '@mui/material'
import { useStyles } from '../../hooks'
import Sidebar, { StyledToolbar } from '../Sidebar'
import Header from '../Header'

const Layout = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false)

    const handleMenuOpen = () => setOpen(!open)

    return (
        <Box className={classes.flex} mb={10}>
            <Sidebar open={open} onClose={handleMenuOpen} />
            <Box component={'main'} sx={{ flexGrow: 1 }} >
                <Header onClickMenu={handleMenuOpen} />
                <StyledToolbar />
                <Container sx={{ marginTop: 5 }}>
                    <Outlet />
                </Container>
            </Box>
        </Box>
    )
}

export default Layout