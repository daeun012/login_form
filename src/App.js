import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Navigator from './components/Navigator';

function App() {
    return (
        <HashRouter>
            <Navigator />
        </HashRouter>
    );
}

export default App;
