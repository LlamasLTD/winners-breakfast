import React from 'react';
import { hot } from 'react-hot-loader';
import Dashboard from './dashboard';


const App = () => (
    <Dashboard user="James" />
)

export default hot(module)(App)