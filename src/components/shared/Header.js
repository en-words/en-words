import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import { PageHeader } from 'react-bootstrap'

import { APP_VERSION } from '../../common/AppSettings'

class Header extends Component {

    render() {
        return (
            <PageHeader><Link onClick={e=> {
                e.preventDefault();
                this.props.resetSelectGroup();
                browserHistory.push('/');
            }}><h1>En-Words</h1></Link><small>Version: ({APP_VERSION})</small></PageHeader>
        );
    }
}

export default Header;
