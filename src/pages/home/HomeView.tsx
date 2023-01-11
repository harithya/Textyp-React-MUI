import { Box } from '@mui/material'
import React from 'react'
import { SearchBar, Section } from '../../components'

const HomeView = () => {
    return (
        <Section title="Hay, Thomas 👋" subtitle="What would you like to create to day?">
            <Box width={{ md: "50%", xs: "100%" }}>
                <SearchBar />
            </Box>
        </Section>
    )
}

export default HomeView