import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from 'react-router-dom';

import { Header } from './Header';
import { Donations } from './Donations';
import { Navigation } from './Navigation';
import { ContactUs } from './ContactUs';
import { Footer } from './Footer';
import { AppContext, defaults } from '../components/Context';
import data from './data.json';
import routes from './routes.json';

const App = () => {
    return (
        <AppContext.Provider value={defaults}>
            <Header />
            <Router>
                <Navigation />
                <Switch>
                    <Route path={routes.colaborate}>
                        <ContactUs />
                    </Route>
                    <Route path={routes.home}>
                        <Donations donations={data.donations} />
                        <Footer />
                    </Route>
                </Switch>
            </Router>
        </AppContext.Provider>
    );
};

export { App };