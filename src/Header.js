import React, {Component} from 'react';
import logo from './todopostit.png';
import './App.css';

// Simple support for adding a To Do
class Header extends Component {

    render() {
        return (
            <div>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">{this.props.appTitle}</h1>
                </header>
            </div>
        );
    }
}

// Export our goodness to the masses
export default Header;