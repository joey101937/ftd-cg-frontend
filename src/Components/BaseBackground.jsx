import React from 'react';
import { makeStyles } from '@mui/styles';
import LogoBar from './LogoBar';
import { mediumGray } from '../GLOBALS';
import DesktopNavBar from './DesktopNavMenu';
import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import Footer from './Footer';
import MyCardsPage from './myCardsPage';


const useStyles = makeStyles((theme) => {
    return {
        body: {
            background: 'linear-gradient(180deg, rgba(21,56,112,1) 0%, rgba(14,41,84,1) 100%)',
            color: 'white',
            minHeight: window.innerHeight,
            paddingTop: '15px',
        },
        banner: {
            height: '110px',
            background: mediumGray,
            color: 'white'
        }
    }
});

const BaseBackground = (props) => {
    const classes = useStyles(props);

    return (
        <>
            <div className={classes.banner} >
                <LogoBar />
                {<DesktopNavBar />}
            </div>
            <div className={classes.body}>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/deckBuilder' element={<div>deck builder</div>} />
                    <Route path='/myCards' element={<MyCardsPage />} />
                    <Route path='/play' element={<div>play page</div>} />
                </Routes>
            </div>
            <Footer />
        </>
    );
};

export default BaseBackground; 