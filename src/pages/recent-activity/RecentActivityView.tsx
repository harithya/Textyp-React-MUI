import { Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import recentDummy from '../../assets/dummy/recent-dummy'
import { Recent, Section } from '../../components'

const RecentActivityView = () => {
    return (
        <Section title='Recent Activity' subtitle='Jump back to your previos requests and mak changes to generated content'>
            <Typography fontWeight={"600"}>Refer to all your recent requests:</Typography>
            <Grid container mt={2}>
                <Grid item lg={8}>
                    <Stack spacing={3}>
                        {recentDummy.map((val, key) => <Recent key={key.toString()} {...val} />)}
                    </Stack>
                </Grid>
            </Grid>
        </Section>
    )
}

export default RecentActivityView