import { makeStyles } from '@mui/styles';
import { ReactComponent as MaterialsIcon } from '../Icons/iron2SVG.svg'
import {  lightGray } from '../GLOBALS';
import { shortHandNumber } from '../util';


const useStyles = makeStyles((theme) => {
    return {
        root: props => ({
            textAlign: 'center',
            display: 'inline-block',
            float: props.float,
            top: '-17px',
            verticalAlign: 'baseline',
            fontSize: '18pt',
            fontWeight: 'bold',
        }),
        text: {
            color: 'white',
            fontWeight: 'bold',
        }
    }
});

const MaterialCostIcon = (props) => {
    const classes = useStyles(props);
    const { cost } = props;

    return (
        <div className={classes.root}>
            <div className={classes.text}>
                {shortHandNumber(cost || 0)}
                <MaterialsIcon style={{color: lightGray }} />
            </div>
        </div>
    );
};

export default MaterialCostIcon; 