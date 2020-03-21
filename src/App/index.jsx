import React from 'react';
import { AppContext, defaults } from '../components/Context';

const App = () => {
    return (
        <AppContext.Provider value={defaults}>
            <div />
        </AppContext.Provider>
    );
};

export { App };