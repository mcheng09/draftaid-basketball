import React, { Component } from 'react';

import './App.css';

import Header from './Header'
import Footer from './Footer'
import DraftBoard from './DraftBoard'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <DraftBoard />
                <Footer />
            </div>
        );
    }
}

export default App;