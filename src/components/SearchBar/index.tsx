import React from 'react'
import { InputBase, Box, styled, Stack, colors } from '@mui/material'
import Icon from '../Icon'

const SearchBar = () => {
    return (
        <StyledSearchBar>
            <Stack direction={"row"} alignItems="center" spacing={2}>
                <Icon name="SearchRounded" htmlColor={colors.grey[400]} />
                <InputBase placeholder='Search Content types' sx={{ width: "100%" }} />
            </Stack>
        </StyledSearchBar>
    )
}

const StyledSearchBar = styled(Box)(({ theme }) => ({
    backgroundColor: "white",
    height: "44px",
    display: "flex",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10,
    border: `1px solid ${theme.palette.grey[200]}`,
    marginBottom: 28
}))

export default SearchBar