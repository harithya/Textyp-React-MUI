import React, { FC, PropsWithChildren } from 'react'
import { Box, Stack, Typography, colors } from '@mui/material'


interface Props {
    title: string
}
const Section: FC<PropsWithChildren> = ({ children }) => {
    return (
        <Box>
            <Stack>
                <Typography
                    component={"h4"}
                    fontSize={30}
                    fontWeight={600}>
                    Hay, Thomas 👋
                </Typography>
                <Typography fontSize={18} color={colors.grey[500]} mt={1}>What would you like to create to day?</Typography>
            </Stack>
            {children}
        </Box>
    )
}


export default Section