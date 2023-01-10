import React from 'react'
import {
    Drawer,
    colors,
    Toolbar,
    styled,
    Container,
    List,
    ListSubheader,
    useTheme,
    useMediaQuery
} from '@mui/material'
import SidebarItem from './SidebarItem';

export const DRAWER_WIDTH = 290;
const Sidebar = () => {
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
        >
            <StyledToolbar>
                <img src='/logo.png' height={28} />
            </StyledToolbar>
            <Container sx={{ mt: 5 }}>
                <List
                    component="nav"
                    aria-labelledby="nested-list-subheader">
                    <ListSubheader component="div" id="nested-list-subheader">
                        Overview
                    </ListSubheader>
                    <SidebarItem icon="GridViewRounded" active>Dashboard</SidebarItem>
                    <SidebarItem icon="DriveFileRenameOutlineRounded">Long-From Editor</SidebarItem>
                    <SidebarItem icon="EmailRounded">Email Tools</SidebarItem>
                    <SidebarItem icon="AccountTreeRounded">Social Media Tools</SidebarItem>
                    <SidebarItem icon="SsidChartRounded">SEO Tools</SidebarItem>
                    <SidebarItem icon="BookmarksRounded">Saved Copies</SidebarItem>
                    <SidebarItem icon="WatchLaterRounded">Recent Activity</SidebarItem>
                    {/* <ListSubheader component="div" sx={{ marginTop: 2 }} id="nested-list-subheader-2">
                        Account
                    </ListSubheader>
                    <SidebarItem icon="PublicRounded">Change Language</SidebarItem>
                    <SidebarItem icon="StarRounded">Share Feedback</SidebarItem>
                    <SidebarItem icon="LogoutRounded">Log Out</SidebarItem> */}
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