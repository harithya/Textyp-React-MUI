import { Paper, Grid, styled, colors, Typography, Stack } from '@mui/material';
import React, { FC } from 'react'

interface Props {
    title: string;
    subtitle: string;
    image: string;
}
const Service: FC<Props> = ({ title, subtitle, image }) => {
    return (
        <Grid item md={4} xs={12}>
            <StyledCard elevation={0}>
                <img src={`/content/${image}`} />
                <Stack>
                    <Typography fontSize={17} fontWeight="500" mb={1}>{title}</Typography>
                    <Typography variant='subtitle2' color={colors.grey[500]} fontWeight="400">
                        {subtitle}
                    </Typography>
                </Stack>
            </StyledCard>
        </Grid>
    )
}

export const StyledCard = styled(Paper)({
    border: `1px solid ${colors.grey[200]}`,
    padding: '20px 20px 20px 20px',
    display: "flex",
    alignItems: "center",
    gap: 15,
    borderRadius: 10,
    '&:hover': {
        cursor: "pointer",
        backgroundColor: colors.grey[100]
    }
})


export default Service