import React, { FC, PropsWithChildren } from 'react'
import { styled, ListItemButton, ListItemText, ListItemIcon, colors } from '@mui/material'
import Icon, { IconName } from '../Icon'
import { NavLink, useLocation } from 'react-router-dom'

interface Props {
    icon?: IconName,
    to?: string
}
const SidebarItem: FC<PropsWithChildren<Props>> = ({ children, icon, to = '/' }) => {
    const location = useLocation();
    return (
        // @ts-ignore
        <ListItem component={NavLink} to={to} active={location.pathname == to ? 'true' : ''}>
            {icon && <StyledIcon>
                <Icon name={icon} />
            </StyledIcon>}
            <ListItemText>
                {children}
            </ListItemText>
        </ListItem>
    )
}

const ListItem = styled(ListItemButton)<{ active: string }>(({ active, theme }) => ({
    borderRadius: 12,
    // marginBottom: 5,
    backgroundColor: active == 'true' ? theme.palette.primary.main : 'transparent',
    '& .MuiTypography-root': {
        fontWeight: 500,
        color: active ? theme.palette.common.white : "#ABABAB",
        fontSize: 15
    },
    '& .MuiListItemIcon-root .MuiSvgIcon-root': {
        color: active?.toString() ? theme.palette.common.white : "#ABABAB",
    },
    '&:hover': {
        backgroundColor: active ? theme.palette.primary.main : colors.grey[100],
    },
}))

const StyledIcon = styled(ListItemIcon)({
    minWidth: 50
})
export default SidebarItem