import {Button, Typography, Link} from '@material-ui/core'
import React from 'react'
import {SettingsPageUseStyle} from './useStyle'
import {NavLink} from "react-router-dom";

const SettingsPage = () => {

    const s = SettingsPageUseStyle()

    return (
        <div className={s.container}>
            <Typography variant='h1'>
                Settings
            </Typography>
            <div className={s.saveButtonDiv}>
                <Link component={NavLink} to={'/main-page'} color={'inherit'}>
                    <Button variant={'outlined'}>Save</Button>
                </Link>
            </div>
        </div>
    )
}

export default SettingsPage
