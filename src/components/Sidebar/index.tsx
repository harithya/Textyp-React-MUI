import React, { FC } from 'react'
import {
    Drawer,
    colors,
    Toolbar,
    styled,
    Container,
    List,
    ListSubheader,
    useTheme,
    useMediaQuery,
    DrawerProps
} from '@mui/material'
import SidebarItem from './SidebarItem';

export const DRAWER_WIDTH = 290;

const Sidebar: FC<DrawerProps> = (props) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"))

    return (
        <Drawer
            sx={{
                width: DRAWER_WIDTH,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: DRAWER_WIDTH,
                    boxSizing: 'border-box',
                    border: 'none',
                    borderRight: `1px solid ${colors.grey[200]}`,
                },
            }}
            variant={isMobile ? "temporary" : "permanent"}
            anchor="left"
            {...props}>
            <StyledToolbar>
                <img src='/logo.png' height={28} />
            </StyledToolbar>
            <Container sx={{ mt: 1 }}>
                <List
                    component="nav"
                    aria-labelledby="nested-list-subheader">
                    <ListSubheader component="div" id="nested-list-subheader">
                        Overview
                    </ListSubheader>
                    <SidebarItem icon="GridViewRounded" to="/" >Dashboard</SidebarItem>
                    <SidebarItem icon="DriveFileRenameOutlineRounded" to="/long-from-editor">Long-From Editor</SidebarItem>
                    <SidebarItem icon="EmailRounded" to="#">Email Tools</SidebarItem>
                    <SidebarItem icon="AccountTreeRounded" to="#">Social Media Tools</SidebarItem>
                    <SidebarItem icon="SsidChartRounded" to="#">SEO Tools</SidebarItem>
                    <SidebarItem icon="BookmarksRounded" to="#">Saved Copies</SidebarItem>
                    <SidebarItem icon="WatchLaterRounded" to="#">Recent Activity</SidebarItem>
                    <ListSubheader component="div" sx={{ marginTop: 2 }} id="nested-list-subheader-2">
                        Account
                    </ListSubheader>
                    <SidebarItem icon="PublicRounded" to="#">Change Language</SidebarItem>
                    <SidebarItem icon="StarRounded" to="#">Share Feedback</SidebarItem>
                    <SidebarItem icon="LogoutRounded" to="#">Log Out</SidebarItem>
                </List>
            </Container>
        </Drawer>
    )
}

export const StyledToolbar = styled(Toolbar)({
    justifyContent: "center",
    height: 72
})

export default Sidebar