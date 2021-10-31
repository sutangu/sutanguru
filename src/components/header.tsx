import React, { Component, ReactElement } from 'react';
import { inject, observer } from 'mobx-react';

import './header.scss';

@inject('SutanguStore')
@observer
class Header extends Component<any> {
  changeTheme = (event: any): void => {
    event.preventDefault();
    const { SutanguStore } = this.props;
    SutanguStore.changeTheme(event.currentTarget.value);
  };

  setLangItem = (lang: string): ReactElement => {
    const currLang = localStorage.getItem('lang');

    return (
      <label
        tabIndex={0}
        className={`${currLang === lang ? 'selected' : null}`}
      >
        <input
          type="radio"
          name="chooseLang"
          onClick={this.props.switchLang.bind(lang)}
          value={lang}
        />
        {lang.toUpperCase()}
      </label>
    );
  };

  render() {
    return (
      <header>
        <div>
          <label tabIndex={0}>
            <input
              type="radio"
              name="theme"
              value="darker"
              onChange={this.changeTheme}
            />
            darker
          </label>
          <label tabIndex={0}>
            <input
              type="radio"
              name="theme"
              value="lighter"
              onChange={this.changeTheme}
              defaultChecked={true}
            />
            lighter
          </label>
        </div>
        <div className="languages">
          {this.setLangItem('ru')}
          {this.setLangItem('en')}
        </div>
      </header>
    );
  }
}

export default Header;
