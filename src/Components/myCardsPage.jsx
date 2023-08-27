import { makeStyles } from '@mui/styles';
import PhysicalCard from './PhysicalCard';


const useStyles = makeStyles((theme) => {
    return {
        root: {
            width: '100%',
            textAlign: 'center',
            color: 'white'
        }
    }
});

const MyCardsPage = (props) => {
    const classes = useStyles(props);

    const dummyCard =  {
        name: 'Marauder',
        isBuiltIn: true,
        cardText: 'When this vehicle is played, draw a card.',
        materialCost: 42000,
        blueprintCost: 40205,
        cpCost: 0,
        imageUrl: 'https://i.ibb.co/2dJZzFD/marauder.png',
        playerId: null,
        vehicleType: 'ship',
        type: 'vehicle',
        faction: 'dwg',
        blueprintId: null,
        meta: {
            onPlay: 'marauderOnPlay',
            keywords: ['blocker', 'scrappy'],
        }
    };

    return (
        <div className={classes.root}>
            <PhysicalCard card={dummyCard} />
        </div>
    );
};

export default MyCardsPage; 