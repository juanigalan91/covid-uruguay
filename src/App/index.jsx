import React from 'react';
import { Header } from './Header';
import { AppContext, defaults } from '../components/Context';

const App = () => {
    return (
        <AppContext.Provider value={defaults}>
            <Header />
        </AppContext.Provider>
    );
};

export { App };