import React, { FC } from 'react'
import * as IconList from '@mui/icons-material'
import { SvgIconProps } from '@mui/material'

export type IconName = keyof typeof IconList
interface Props extends SvgIconProps {
    name: IconName
}
const Icon: FC<Props> = ({ name, ...props }) => {
    const MyIcon = IconList[name];
    return (
        <MyIcon {...props} />
    )
}

export default Icon