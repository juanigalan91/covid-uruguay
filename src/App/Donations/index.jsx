/* eslint-disable no-undef */
import React from 'react';
import { Donation } from './Donation';

const CLASSNAME = 'donations';
const Donations = ({ donations }) => {
    React.useLayoutEffect(() => {
        if (twttr && twttr.widgets && twttr.widgets.load) {
            twttr.widgets.load();
        }
    });
    return (
        <section className={CLASSNAME}>
            <div className={`${CLASSNAME}__list`}>
                {
                    donations.map((donation) => (
                        <Donation key={donation.id} {...donation} />
                    ))
                }
            </div>
        </section>

    );
};

export { Donations };