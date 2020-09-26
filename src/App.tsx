import React, { Component } from 'react';
import Header from './components/header'
import { inject, observer } from 'mobx-react';
import './main.scss';
import image from './images/images64';
import telegram from './images/telegram.svg'
import lastfm from './images/last-fm-logo.svg'
import playkey from './images/playkey.svg'
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
    const { SutanguStore } = this.props;

    // TODO: удалить. тестил получение данных из node-scrapper
    // fetch('http://localhost:3030/api/myshows')
    //   .then(response => {
    //     debugger;
    //     return response.json();
    //   })
    //   .then(json => {
    //     console.log(json);
    //     debugger;
    //   })

    return (
      <React.Fragment>
        <Header switchLang={this.switchLang}/>
        <main className="page" data-theme={SutanguStore.theme}>
          <span className="launch-expect">{tr('main.portal_launch_expect')}</span>
          <div className="wrap">
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

            <a href="https://myshows.me/Enclave88">
              <img src="https://u.myshows.me/u/23370.png" alt='https://myshows.me/Enclave88'/>
            </a>

            <ul className='list'>
              <li>
                <a className='social-icon' href='https://steamcommunity.com/id/sutangu/' target='_blank' rel="noopener noreferrer">
                  <img className='icon' src={image.steam} alt='steam' height='25px'/>
                </a>
              </li>
              <li>
                <a className='social-icon' href='https://welcome.playkey.net/lp/referral?ref=8305807' target='_blank' rel="noopener noreferrer">
                  <img className='icon white-icon' src={playkey} alt='playkey' height='25px'/>
                </a>
              </li>
              <li>
                <a className='social-icon' href='https://wakatime.com/@sutangu' target='_blank' rel="noopener noreferrer">
                  <img className='icon' src={image.wakatime} alt='wakatime' height='25px'/>
                </a>
              </li>
              <li>
                <a className='social-icon' href='https://github.com/sutangu' target='_blank' rel="noopener noreferrer">
                  <img className='icon' src={image.github} alt='github' height='25px'/>
                </a>
              </li>
              <li>
                <a className='social-icon lastfm' href='https://www.last.fm/ru/user/Cu-Real' target='_blank'
                   rel="noopener noreferrer">
                  <img className='icon' src={lastfm} alt='lastfm' height='25px'/>
                </a>
              </li>
              <li>
                <a className='social-icon telegram' href='https://t.me/sutangu' target='_blank' rel="noopener noreferrer">
                  <img className='icon' src={telegram} alt='telegram' height='25px'/>
                </a>
              </li>
              <li>
                <a className='social-icon telegram -channel' href='https://t.me/whatreadnotread' target='_blank' rel="noopener noreferrer">
                  <img className='icon' src={telegram} alt='telegram-channel' height='25px'/>
                </a>
                <div className="letter">ch</div>
              </li>
            </ul>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
