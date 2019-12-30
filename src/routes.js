import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Search from './pages/Search';
import Main from './pages/Main';

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Main} />
            <Route path="/search/:smartPhone" component={Search} />
        </BrowserRouter>
    );
}
