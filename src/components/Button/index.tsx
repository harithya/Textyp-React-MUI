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
    paddingTop: 8,
    paddingBottom: 8,
    textTransform: 'none'
})

export default Button