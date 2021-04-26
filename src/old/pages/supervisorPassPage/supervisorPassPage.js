import React from "react"
import {supervisorPassPageStyles} from "./useStyles";
import { Button, Container, Typography} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import {useHistory} from "react-router-dom";

const SupervisorPassPage = () => {
    const s = supervisorPassPageStyles()
    const history = useHistory();
    const [formState, setFormControl] = React.useState({
        isFormValid: false,
        formControl: {
            password: {
                value: '',
                type: 'password',
                label: 'Password',
                errorMessage: 'must have 8-16 characters',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 7, //8
                    maxLength: 17 //16
                }
            }
        }
    })

    const validateControl = (value, validation) => {
        if (!validation) {
            return true
        }
        let isValid = true

        if (validation.required) {
            isValid = value.trim() !== '' && isValid
        }
        if (validation.minLength) {
            isValid = (value.trim().length >= validation.minLength && value.trim().length <= validation.maxLength) && isValid
        }

        return isValid
    }

    const onChangeHandler = (event, controlName) => {
        const forms = {...formState}
        const control = {...forms.formControl[controlName]}
        control.value = event.target.value.trim().toLowerCase()
        control.touched = true
        control.valid = validateControl(control.value, control.validation)
        forms.formControl[controlName] = control
        let isFormValid = true
        Object.keys(forms.formControl).forEach(name => {
            isFormValid = forms.formControl[name].valid
        })
        forms.isFormValid = isFormValid
        setFormControl(forms)
    }

    return (
        <Container className={s.root}>
            <div>
                <Typography variant={'h3'} className={s.title}>
                    Please, enter password:
                </Typography>
                <form className={s.form}>
                    <TextField
                        className={s.textField}
                        required
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        type={formState.formControl.password.type}
                        value={formState.formControl.password.value}
                        error={!formState.formControl.password.valid && formState.formControl.password.touched}
                        label={formState.formControl.password.label}
                        helperText={formState.formControl.password.errorMessage}
                        onChange={event => onChangeHandler(event, 'password')}
                    />
                    <Button
                        disabled={!formState.isFormValid}
                        fullWidth
                        size="large"
                        variant={'outlined'}
                        color="secondary"
                        className={s.button}
                        onClick={() => history.push('/seed')}
                    >next</Button>
                </form>
            </div>
        </Container>
    )
}

export default SupervisorPassPage