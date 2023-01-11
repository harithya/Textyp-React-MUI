import React, { FC } from 'react'
import { AppBar, colors, Stack, styled, IconButton } from '@mui/material'
import { DRAWER_WIDTH, StyledToolbar } from '../Sidebar'
import Button from '../Button'
import Icon from '../Icon'
import ProfileDropdown from './ProfileDropdown'

interface Props {
    onClickMenu?: () => void,
}
const Header: FC<Props> = ({ onClickMenu }) => {

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
                    <IconButton sx={{ display: { xs: 'flex', md: 'none' } }} onClick={onClickMenu}>
                        <Icon name="MenuRounded" />
                    </IconButton>
                    <ActionButton
                        color='secondary'
                        sx={{ color: colors.grey[400] }}
                        startIcon={<Icon name='FileCopyRounded' htmlColor={colors.grey[400]} />}>
                        Create Copy
                    </ActionButton>
                    <ActionButton
                        color='secondary'
                        sx={{ color: colors.grey[400] }}
                        startIcon={<Icon name='BookmarksRounded' htmlColor={colors.grey[400]} />}>
                        Saved Copies
                    </ActionButton>
                </Stack>
                <Stack
                    direction={"row"}
                    spacing={2}
                    alignItems="center">
                    <Button startIcon={<Icon name="CheckCircleRounded" />}>Go Pro</Button>
                    <ProfileDropdown />
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
// create
const Toolbar = styled(StyledToolbar)({
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center"
})

const ActionButton = styled(Button)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
        display: "none"
    }
}))


export default Header