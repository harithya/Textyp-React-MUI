import React from 'react'
import { AppBar, Avatar, colors, Stack, styled } from '@mui/material'
import { DRAWER_WIDTH, StyledToolbar } from '../Sidebar'
import Button from '../Button'
import Icon from '../Icon'

const Header = () => {
    return (
        <StyledAppBar
            elevation={0}
            position="fixed"
            sx={{
                width: { md: `calc(100% - ${DRAWER_WIDTH}px)` },
                ml: { md: `${DRAWER_WIDTH}px` },
            }}>
            <Toolbar>
                <Stack direction={"row"} spacing={2}>
                    <Button
                        color='secondary'
                        sx={{ color: colors.grey[400] }}
                        startIcon={<Icon name='FileCopyRounded' htmlColor={colors.grey[400]} />}>
                        Create Copy
                    </Button>
                    <Button
                        color='secondary'
                        sx={{ color: colors.grey[400] }}
                        startIcon={<Icon name='BookmarksRounded' htmlColor={colors.grey[400]} />}>
                        Saved Copies
                    </Button>
                </Stack>
                <Stack
                    direction={"row"}
                    spacing={2}
                    alignItems="center">
                    <Button startIcon={<Icon name="CheckCircleRounded" />}>Go Pro</Button>
                    <Button
                        variant='text'
                        endIcon={<Icon name='ExpandMoreRounded' htmlColor='grey' />}>
                        <Avatar
                            src="https://mui.com/static/images/avatar/3.jpg"
                            alt="User Profile"
                        />
                    </Button>
                </Stack>
            </Toolbar>
        </StyledAppBar>
    )
}

const StyledAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: "white",
    display: "flex",
    alignItems: "flex-start",
    borderBottom: `1px solid ${theme.palette.grey[200]}`
}))

const Toolbar = styled(StyledToolbar)({
    display: "flex",
    width: "100%",
    justifyContent: "space-between"
})

export default Header