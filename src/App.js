import React, { Component } from 'react';
import './App.css';
import wakatime from './images/wakatime-120.png';
import github from './images/github-icon.svg';
import lastfm from './images/last-fm-3-256.jpg';

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
                        <a href='https://wakatime.com/@sutangu' target='_blank'>
                            <img className='icon' src={ wakatime } alt='wakatime' height='25px'/>
                        </a>
                    </li>
                    <li>
                        <a href='https://github.com/sutangu' target='_blank'>
                            <img className='icon' src={ github } alt='github' height='25px'/>
                        </a>
                    </li>
                    <li>
                        <a href='https://www.last.fm/ru/user/Cu-Real' target='_blank'>
                            <img className='icon' src={ lastfm } alt='github' height='25px'/>
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default App;
