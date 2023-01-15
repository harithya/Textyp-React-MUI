import { CardProps, SxProps } from '@mui/material'
import React, { FC, PropsWithChildren } from 'react'
import { Card as Container, CardContent } from '@mui/material'

interface Props extends CardProps {
    sxContent?: SxProps
}
const Card: FC<PropsWithChildren<Props>> = ({ children, sxContent, ...props }) => {
    return (
        <Container {...props} sx={{ height: "100%" }}>
            <CardContent sx={sxContent}>
                {children}
            </CardContent>
        </Container>
    )
}

export default Card