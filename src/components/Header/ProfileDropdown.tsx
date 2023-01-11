import React, { Fragment } from 'react'
import Button from '../Button'
import {
    Avatar,
    Menu,
    MenuItem,
    styled,
    ListItemIcon,
    ListItemText,
    colors
} from '@mui/material'
import Icon from '../Icon'

const ProfileDropdown = () => {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Fragment>
            <Button
                variant='text'
                id="profile-button"
                aria-controls={open ? 'profile-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                endIcon={<Icon name='ExpandMoreRounded' htmlColor='grey' />}>
                <Avatar
                    src="https://mui.com/static/images/avatar/3.jpg"
                    sx={{ height: 32, width: 32 }}
                    alt="User Profile"
                />
            </Button>
            <Menu
                id="profile-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'profile-button',
                }}
                sx={{
                    '& .MuiPaper-root': {
                        // position: "relative"
                    },
                    // '&:before': {
                    //     content: "''",
                    //     position: "absolute",
                    //     height: 50,
                    //     width: 50,
                    //     backgroundColor: "red"
                    // }
                }}
            >
                <StyledMenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <Icon name="PersonRounded" htmlColor={colors.grey[500]} />
                    </ListItemIcon>
                    <ListItemText>Profile</ListItemText>
                </StyledMenuItem>
                <StyledMenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <Icon name="EditRounded" htmlColor={colors.grey[500]} />
                    </ListItemIcon>
                    <ListItemText>Edit Profile</ListItemText>
                </StyledMenuItem>
                <StyledMenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <Icon name="SwitchAccountRounded" htmlColor={colors.grey[500]} />
                    </ListItemIcon>
                    <ListItemText>Switch User</ListItemText>
                </StyledMenuItem>
                <StyledMenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <Icon name="LogoutRounded" htmlColor={colors.grey[500]} />
                    </ListItemIcon>
                    <ListItemText>Log Out</ListItemText>
                </StyledMenuItem>
            </Menu>
        </Fragment>
    )
}

const StyledMenuItem = styled(MenuItem)({
    paddingRight: 50,
    paddingTop: 10,
    paddingBottom: 10,
    '& .MuiTypography-root': {
        fontSize: 14
    },
    '& .MuiSvgIcon-root': {
        fontSize: 20
    }
})

export default ProfileDropdown