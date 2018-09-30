import React, { Component } from 'react';
import './App.css';
import wakatime from './images/wakatime-120.png';
import github from './images/github-icon.svg';

class App extends Component {
    render() {
        return (
            <div className="page">
                <h1>sutangu</h1>
                <p className="intro">
                    Here will be website 'bout sutangu.
                </p>
                <ul className='list'>
                    <li>
                        <a href='https://wakatime.com/@sutangu'>
                            <img className='icon' src={ wakatime } alt='wakatime' height='25px'/>
                        </a>
                    </li>
                    <li>
                        <a href='https://github.com/sutangu'>
                            <img className='icon' src={ github } alt='github' height='25px'/>
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default App;
