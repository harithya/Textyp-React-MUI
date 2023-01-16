import { Container, Typography, Stack } from '@mui/material'
import React, { FC, PropsWithChildren } from 'react'
import Card from '../Card'

interface Props {
    title: string,
    image: string
}
const SectionTools: FC<PropsWithChildren<Props>> = ({ children, title, image }) => {
    return (
        <Container maxWidth="md">
            <Card>
                <Stack direction={"row"} alignItems="center" spacing={3}>
                    <img src={image} height={60} width={60} />
                    <Typography fontWeight={"600"} fontSize={20}>{title}</Typography>
                </Stack>
                <Container sx={{ marginTop: 5 }}>
                    {children}
                </Container>
            </Card>
        </Container>
    )
}

export default SectionTools