import React from 'react';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme) => {
    return {
        root: {
        },
    }
});

const HomePage = (props) => {
    const classes = useStyles(props);

    return (
        <>
            <div className={classes.root}>
               home page
            </div>
        </>
    );
};

export default HomePage; 