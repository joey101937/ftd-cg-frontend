import React from 'react';
import { makeStyles } from '@mui/styles';
import { Grid } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => {
    return {
        root: {
            position: 'absolute',
            left: '150px',
            top: '40px',
            marginRight: '100px',
            width: '600px',
            fontSize: '16pt',
            textAlign: 'right',
            fontWeight: 'bold',
        },
        item: {
            cursor: 'pointer',
            textAlign: 'center',
            borderRadius: '5px',
            "&:hover": {
                background: 'rgba(66,66,66,.23)'
              },
        },
    }
});

const DesktopNavBar = (props) => {
    const classes = useStyles(props);
    const navigate = useNavigate();

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid className={classes.item} item xs={4} onClick={() => navigate('/deckBuilder')}>
                    Manage Decks
                </Grid>
                <Grid className={classes.item} item xs={4} onClick={() => navigate('/myCards')}>
                    My Cards
                </Grid>
                <Grid className={classes.item} item xs={4} onClick={() => navigate('/play')}>
                    Play Game
                </Grid>
            </Grid>
        </div>
    );
};

export default DesktopNavBar; 