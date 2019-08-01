import React, { Component } from 'react';
import Header from './components/header'
import {inject, observer} from 'mobx-react';
import './main.scss';
import image from './images/images64';
import tr from './helpers/translator';

@inject('SutanguStore')
@observer
class App extends Component {
    switchLang = (event: any) => {
        localStorage.setItem('lang', event.currentTarget.value.toLowerCase());
        this.forceUpdate();
    };

    render() {
        // @ts-ignore
        const {SutanguStore} = this.props;

        return (
            <React.Fragment>
                <Header switchLang={this.switchLang} />
                <main className="page" data-theme={SutanguStore.theme}>
                    <h1>{tr('main.sutangu')}</h1>
                    <h2>{tr('main.subtitle')}</h2>
                    <h3>{tr('main.h3')}</h3>
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
