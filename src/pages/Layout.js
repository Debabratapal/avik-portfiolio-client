import React from 'react';
import Header from '../Components/Header/Header';

export const Layout = props => (
    <div>
        <Header />
        {props.children}
    </div>

)