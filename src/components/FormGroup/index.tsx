import React, { FC, PropsWithChildren } from 'react'
import { Box, Typography } from '@mui/material'

interface Props {
    title: string
}
const FormGroup: FC<PropsWithChildren<Props>> = ({ children, title }) => {
    return (
        <Box mb={3}>
            <Typography fontWeight={"600"} fontSize={14} mb={1}>{title}</Typography>
            {children}
        </Box>
    )
}

export default FormGroup