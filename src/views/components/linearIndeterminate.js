import React from 'react'

import { LinearProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const LinearIndeterminate = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <LinearProgress color="secondary" />
        </div>
    );
};

//styles
const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export default LinearIndeterminate