import React, { FC } from 'react'
import { Button as Btn, ButtonProps, styled } from '@mui/material'

const Button: FC<ButtonProps> = ({ children, ...props }) => {
    return (
        <StyledButton
            disableElevation
            variant='contained'
            {...props} >
            {children}
        </StyledButton>
    )
}

const StyledButton = styled(Btn)({
    borderRadius: 10,
    paddingTop: 12,
    paddingBottom: 12,
    textTransform: 'none'
})

export default Button