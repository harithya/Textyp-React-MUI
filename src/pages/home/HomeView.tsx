import { Box, Chip, ChipProps, alpha, Stack, styled } from '@mui/material'
import React from 'react'
import { SearchBar, Section } from '../../components'
import filterDummy from '../../assets/dummy/filter-dummy'

const HomeView = () => {
    return (
        <Section title="Hay, Thomas 👋" subtitle="What would you like to create to day?">
            <Box width={{ md: "auto", xs: "100%", lg: "50%" }}>
                <SearchBar />
                <HorizontalScroll>
                    <Stack direction="row" spacing={1} sx={{ overflowX: "auto" }}>
                        {filterDummy.map((item, index) =>
                            <StyledChip
                                label={item}
                                key={`filter-${index}`}
                                onClick={() => console.log(item)}
                                active={index === 0 ? 'true' : 'false'}
                            />)}
                    </Stack>
                </HorizontalScroll>
            </Box>
        </Section>
    )
}

interface StyledChipProps extends ChipProps {
    active: 'true' | 'false'
}
const StyledChip = styled(Chip)<StyledChipProps>(({ theme, active }) => ({
    borderRadius: 10,
    paddingTop: 18,
    paddingBottom: 18,
    paddingRight: 15,
    paddingLeft: 15,
    backgroundColor: active == 'true' ? alpha(theme.palette.primary.main, 0.2) : theme.palette.common.white,
    border: `1px solid ${theme.palette.grey[200]}`,
    '& .MuiChip-label': {
        fontWeight: 600,
        color: active == 'true' && theme.palette.primary.main,
    },
    '&:hover': {
        backgroundColor: theme.palette.grey[100]
    },

}))

const HorizontalScroll = styled(Box)(({ theme }) => ({
    overflowX: "auto",
    [theme.breakpoints.down("md")]: {
        width: "92vw",
    },
    // hidden scrollbar
    '& .css-2t57xt-MuiStack-root::-webkit-scrollbar': {
        display: "none"
    },
}))

export default HomeView