import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import './header.scss';

@inject('SutanguStore')
@observer
class Header extends Component {
    changeTheme = (event: any) => {
        event.preventDefault();
        // @ts-ignore
        const {SutanguStore} = this.props;
        SutanguStore.changeTheme(event.currentTarget.value);
    };
    render() {
        return (
            <header>
                <label>
                    <input type='radio' name='theme' value='darker' onChange={this.changeTheme} />
                    darker
                </label>
                <label>
                    <input type='radio' name='theme' value='lighter' onChange={this.changeTheme} defaultChecked={true} />
                    lighter
                </label>
            </header>
        );
    }
}

export default Header;
