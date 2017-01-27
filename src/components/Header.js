import React, { Component } from 'react';
import { Link } from 'react-router';
import { PageHeader } from 'react-bootstrap'

import { APP_VERSION } from '../common/AppSettings'

class Header extends Component {

    render() {
        return (
            <PageHeader><Link to='/'><h1>En-Words</h1></Link><small>Version: ({APP_VERSION})</small></PageHeader>
        );
    }
}

export default Header;
