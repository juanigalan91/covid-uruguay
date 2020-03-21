import React from 'react';
import { Header } from './Header';
import { Donations } from './Donations';
import { Footer } from './Footer';
import { AppContext, defaults } from '../components/Context';
import data from './data.json';

const App = () => {
    return (
        <AppContext.Provider value={defaults}>
            <Header />
            <Donations donations={data.donations} />
            <Footer />
        </AppContext.Provider>
    );
};

export { App };