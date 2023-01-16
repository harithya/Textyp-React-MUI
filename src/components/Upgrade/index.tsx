import { Link, Stack, Typography, colors } from '@mui/material'
import React from 'react'

const Upgrade = () => {
    return (
        <Stack mt={2}>
            <Typography variant='body2' color={colors.grey[500]} textAlign="center">
                200 credit remaining. Need more? <Link fontWeight={"bold"}>Upgrade now!</Link>
            </Typography>
        </Stack>
    )
}

export default Upgrade