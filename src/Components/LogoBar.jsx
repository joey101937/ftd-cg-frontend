import { makeStyles } from '@mui/styles';
import logo from '../Icons/ftd-logo-large.png';
import { useNavigate } from 'react-router-dom';


const useStyles = makeStyles((theme) => {
    return {
        root: {
            display: 'inline-block',
            cursor: 'pointer',
        },
        logoClass: {
            padding: '6px',
            maxHeight: '100px',
            display: 'inline-block',
        }
    }
});

const LogoBar = (props) => {
    const classes = useStyles(props);
    const navigate = useNavigate();

    return (
        <div className={classes.root} onClick={() => navigate('/')}>
            <img className={classes.logoClass} src={logo} alt='logo'/>
        </div>
    );
};

export default LogoBar; 