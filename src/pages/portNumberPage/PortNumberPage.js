import React from "react";
import {Accordion, AccordionDetails, AccordionSummary, Button, Container, Typography} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import {portNumbersPageStyles} from "./useStyles";
import {useHistory, useLocation} from "react-router-dom";
import Link from "@material-ui/core/Link";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const PortNumberPage = () => {
    const s = portNumbersPageStyles()
    const history = useHistory()
    const location = useLocation()
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    }

    const [firstPort, setFirstPort] = React.useState(4282)
    const [secondPort, setSecondPort] = React.useState(4283)
    const [touched1, setTouched1] = React.useState(false)
    const [touched2, setTouched2] = React.useState(false)

    const onChangeFirstPort = (event) => {
        setTouched1(true)
        setFirstPort(event.target.value)
    }
    const onChangeSecondPort = (event) => {
        setTouched2(true)
        setSecondPort(event.target.value)
    }

    return (
        <Container className={s.root}>

            <div>
                <Typography variant={'h3'} className={s.title}>
                    Set Port Numbers
                </Typography>
                <div className={s.content}>
                    <Typography variant={'h5'} className={s.subTitle}>Ports identify Xa-Miner on your network and
                        must be forwarded in your Internet router.</Typography>
                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography className={s.secondaryHeading}>If this is the first or only Xa-Miner on your
                                network, the default ports (4282,
                                4283) should be left
                                as is.</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                {`You will need to Forward these ports in your Router for the unit to work correctly.
                                If you run into issues forwarding the port, please check the FAQ for assistance.`}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel2bh-content"
                            id="panel2bh-header"
                        >
                            <Typography className={s.secondaryHeading}>Once you have forwarded the ports, you can
                                &nbsp;<Link href={'https://troubleshoot.siacentral.com/scprime/84.81.150.80:4282'}
                                            color={'inherit'} style={{textDecoration: 'underline'}}>click</Link>&nbsp;
                                {
                                    'to the unit is working correctly.'
                                }</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                {
                                    'If you have multiple units on the same network, you will need to set the ports of additional units to be different from the 1st.\n' +
                                    ' We suggest using numbers that are easy to remember such as 4292/4293, etc.'
                                }
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                </div>
                <form className={s.form}>
                    <TextField
                        className={s.textField}
                        required
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        type={"number"}
                        value={firstPort}
                        error={!(firstPort.length === 4) && touched1}
                        label={"Hosting Port"}
                        helperText={"(if you have one Xa-Miner, leave at default)"}
                        onChange={onChangeFirstPort}
                    />
                    <TextField
                        className={s.textField}
                        required
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        type={"number"}
                        value={secondPort}
                        error={!(secondPort.length === 4) && touched2}
                        label={"Secondary Port"}
                        helperText={"(if you have one Xa-Miner, leave at default)"}
                        onChange={onChangeSecondPort}
                    />
                    {location.pathname === '/set-port' &&
                    <Button
                        // disabled={!formState.isFormValid}
                        fullWidth
                        size="large"
                        variant={'contained'}
                        color="secondary"
                        className={s.button}
                        onClick={() => history.push('/loader')}
                    >Next</Button>}
                </form>
            </div>
        </Container>
    )
}

export default PortNumberPage