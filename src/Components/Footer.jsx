import { makeStyles } from '@mui/styles';
import { mediumGray } from '../GLOBALS';


const useStyles = makeStyles((theme) => {
    return {
        root: {
            width: '100%',
            height: '70px',
            background: mediumGray,
            textAlign: 'center',
        },
        imageClass: {
            objectFit: 'cover',
        }
    }
});

const Footer = (props) => {
    const classes = useStyles(props);

    return (
        <div className={classes.root}>
            <div>
            Contact: (555) - 555 - 555
            </div>
            <div>
            123 N Tyron Street
            </div>
            <div>
            Copyright 2023
            </div>
        </div>
    );
};

export default Footer; 