import React from 'react';
import {withWidth, Typography, Hidden, Button} from '@material-ui/core';

const HiddenList = (props) => {
    return(
        <div>
            <Typography variant="h6" color="initial" >
                Ancho: {props.width}
            </Typography>
            <Hidden smUp>
                <Button variant="h6" color="primary">
                    hola
                </Button>
            </Hidden>
        </div>
    )
}

export default withWidth()(HiddenList);