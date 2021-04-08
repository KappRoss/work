import {Button, Typography, Link} from '@material-ui/core'
import React from 'react'
import {SettingsPageUseStyle} from './useStyle'
import {NavLink} from "react-router-dom";

const SettingsPage = () => {

    const s = SettingsPageUseStyle()

    return (
        <section className={s.container}>
            <Typography variant='h1'>
                Settings
            </Typography>
            <div className={s.saveButtonDiv}>
                <Button className={s.buttonCancel} variant={'outlined'}>Cancel</Button>
                <Link component={NavLink} to={'/main-page'} color={'secondary'}>
                    <Button className={s.button} variant={'outlined'} color={'secondary'}>Save</Button>
                </Link>

            </div>
        </section>
    )
}

export default SettingsPage
