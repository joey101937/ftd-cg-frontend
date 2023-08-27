import { makeStyles } from '@mui/styles';
import { boxShadow, boxShadowInverted, darkBlue, lightGray, mediumGray } from '../GLOBALS';
import { ReactComponent as ShieldIcon } from '../Icons/shieldSVG.svg'
import { ReactComponent as HourglassIcon } from '../Icons/hourglassSVG.svg'
import { ReactComponent as AirScreenIcon } from '../Icons/noFlyZoneSVG.svg'
import { ReactComponent as SubScreenIcon } from '../Icons/noSubsSVG.svg'
import { ReactComponent as ScrappyIcon } from '../Icons/repairSVG.svg'
import MaterialCostIcon from './MaterialCostIcon';

const useStyles = makeStyles((theme) => {
    return {
        root: (props) => ({
            width: '280px',
            height: '430px',
            padding: '20px',
            background: mediumGray,
            borderRadius: '10px',
            textAlign: 'center',
            display: 'inline-block',
            boxShadow: boxShadow,
            zIndex: props.zIndex,
            cursor: 'grab',
        }),
        titleSection: {
            textAlign: 'left',
            fontSize: '18pt',
            fontWeight: 'bold',
        },
        imageSectionContainer: (props) => ({
            border: '2px solid black',
            marginTop: '8px',
            marginBottom: '8px',
            borderRadius: '5px',
            boxShadow: boxShadowInverted,
            minHeight: '180px',
            backgroundImage: `url(${props.card.imageUrl})`,
            backgroundSize: '280px 180px'
        }),
        imageClass: (props) => ({
            objectFit: 'cover',
            verticalAlign: 'bottom',
            maxHeight: '180px',
            maxWidth: '278px',
            borderRadius: '5px',
        }),
    }
});

const PhysicalCard = (props) => {
    const classes = useStyles(props);
    const { card } = props;

    return (
        <div className={classes.root}>
            <div className={classes.titleSection}>
                {card.name}
            </div>
            <div className={classes.imageSectionContainer}>
            </div>
            <div>
            <ShieldIcon style={{color: 'yellow', border:'0px solid blue'}}/>
            <HourglassIcon style={{color: 'purple', border:'0px solid blue'}}/>
            <AirScreenIcon style={{color: 'red', border:'0px solid blue'}}/>
            <SubScreenIcon style={{color: darkBlue, border:'0px solid blue'}}/>
            <ScrappyIcon style={{color: lightGray, border:'0px solid blue'}}/>
            </div>
            <MaterialCostIcon float="left" cost={120000} />
        </div>
    );
};

export default PhysicalCard; 