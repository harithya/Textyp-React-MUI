import React from 'react'
import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'
import { useStyles } from '../../hooks'
import Sidebar from '../Sidebar'
import Header from '../Header'

const Layout = () => {
    const classes = useStyles();
    return (
        <Box className={classes.flex}>
            <Sidebar />
            <Box component={'main'} sx={{ flexGrow: 1 }} >
                <Header />
                <Outlet />
            </Box>
        </Box>
    )
}

export default Layout