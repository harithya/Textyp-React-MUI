import { Stack, Typography, colors } from '@mui/material'
import React, { FC } from 'react'
import { useStyles } from '../../hooks'
import Icon from '../Icon'
import { StyledCard } from './Service'

interface Props {
    title: string,
    date: string,
    language: string,
    image: string
}
const Recent: FC<Props> = ({ title, date, language, image }) => {
    const style = useStyles();
    return (
        <StyledCard elevation={0}>
            <img src={`/content/${image}`} />
            <Stack>
                <Typography fontSize={17} fontWeight="500" mb={2}>{title}</Typography>
                <Stack direction={"row"} spacing={10} sx={{ justifyContent: { xs: "space-between", lg: "flex-start" } }}>
                    <Stack direction={"row"} spacing={1} alignItems="center">
                        <Icon name='AccessTime' htmlColor={colors.grey[500]} fontSize={'small'} />
                        <Typography variant='body2' className={style.numline} color={colors.grey[500]}>{date}</Typography>
                    </Stack>
                    <Stack direction={"row"} spacing={1} alignItems="center">
                        <Icon name='Language' htmlColor={colors.grey[500]} fontSize={'small'} />
                        <Typography variant='body2' color={colors.grey[500]}>{language}</Typography>
                    </Stack>
                </Stack>
            </Stack>
        </StyledCard>
    )
}

export default Recent