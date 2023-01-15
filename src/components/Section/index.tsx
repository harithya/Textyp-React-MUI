import React, { FC, PropsWithChildren } from 'react'
import { Box, Stack, Typography, colors } from '@mui/material'


interface Props {
    title: string,
    subtitle?: string
}
const Section: FC<PropsWithChildren<Props>> = ({ children, title, subtitle }) => {
    return (
        <Box>
            <Stack mb={2}>
                <Typography
                    component={"h4"}
                    fontSize={30}
                    mb={1}
                    fontWeight={600}>
                    {title}
                </Typography>
                {subtitle && <Typography fontSize={18} mb={3} color={colors.grey[500]} >{subtitle}</Typography>}
            </Stack>
            {children}
        </Box>
    )
}


export default Section