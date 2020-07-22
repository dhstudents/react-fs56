import React from 'react';
import Movies from './components/Movies'

import './App.css';
import Apphead from './components/Apphead';


function App() {
    return (
        <main className="container">
            <Apphead />

            <Movies />
        </main>
    );
}

export default App;
