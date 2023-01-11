import React, { FC, PropsWithChildren } from 'react'
import { styled, ListItemButton, ListItemText, ListItemIcon, colors } from '@mui/material'
import Icon, { IconName } from '../Icon'

interface Props {
    icon?: IconName,
    active?: boolean | string
}
const SidebarItem: FC<PropsWithChildren<Props>> = ({ children, icon, active }) => {
    return (
        <ListItem active={active?.toString()}>
            {icon && <StyledIcon>
                <Icon name={icon} />
            </StyledIcon>}
            <ListItemText>
                {children}
            </ListItemText>
        </ListItem>
    )
}

const ListItem = styled(ListItemButton)<Props>(({ active, theme }) => ({
    borderRadius: 12,
    // marginBottom: 5,
    backgroundColor: active?.toString() ? theme.palette.primary.main : 'transparent',
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