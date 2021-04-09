import React from "react";
import Copyright from "../Copyright";
import {Box} from "@material-ui/core";

const Footer = (props) => {
    return (
        <footer>
            <div className={props.footerStyle}>
                <Box mt={2}>
                    <Copyright/>
                </Box>
            </div>
        </footer>
    )
}

export default Footer
