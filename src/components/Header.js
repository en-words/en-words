import React, { Component } from 'react';
import { Link } from 'react-router';

import {APP_VERSION} from '../common/AppSettings'

class Header extends Component {

    render() {
        return (
            <div className="page-header">
                <Link to='/'><h1>En-Words</h1></Link> <small>Version: ({APP_VERSION})</small>
            </div>
        );
    }
}

export default Header;
