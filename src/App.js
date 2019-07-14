import React, { Component } from 'react';
import './main.scss';
import image from './images/images64';

class App extends Component {
    state = {
        theme: 'default'
    };

    changeTheme = event => {
        this.setState({
            theme: event.currentTarget.value
        });
    };

    render() {
        return (
            <React.Fragment>
                <header>
                    <label>
                        <input type='radio' name='theme' value='dark' onChange={this.changeTheme}/>
                        dark
                    </label>
                    <label>
                        <input type='radio' name='theme' value='default' onChange={this.changeTheme}/>
                        default
                    </label>
                </header>
                <main className="page" data-theme={this.state.theme}>
                    <h1>sutangu</h1>
                    <h2>Opensourcænimous</h2>
                    <div className='email'>
                        <a href="mailto:me@sutangu.ru">me@sutangu.ru</a>
                    </div>
                    <a href="https://stackoverflow.com/users/5266871/alexander-shtang" target='_blank' rel="noopener noreferrer">
                        <img src="https://stackoverflow.com/users/flair/5266871.png?theme=clean" width="208" height="58"
                             alt="profile for Alexander Shtang at Stack Overflow, Q&amp;A for professional and enthusiast programmers"
                             title="profile for Alexander Shtang at Stack Overflow, Q&amp;A for professional and enthusiast programmers"/>
                    </a>
                    <p className="intro">
                        Here will be website 'bout sutangu.
                    </p>
                    <ul className='list'>
                        <li>
                            <a className='glitch' href='https://wakatime.com/@sutangu' target='_blank' rel="noopener noreferrer">
                                <img className='icon' src={ image.wakatime } alt='wakatime' height='25px'/>
                            </a>
                        </li>
                        <li>
                            <a className='glitch' href='https://github.com/sutangu' target='_blank' rel="noopener noreferrer">
                                <img className='icon' src={ image.github } alt='github' height='25px'/>
                            </a>
                        </li>
                        <li>
                            <a className='glitch' href='https://www.last.fm/ru/user/Cu-Real' target='_blank' rel="noopener noreferrer">
                                <img className='icon' src={ image.lastfm } alt='github' height='25px'/>
                            </a>
                        </li>
                    </ul>
                </main>
            </React.Fragment>
        );
    }
}

export default App;
