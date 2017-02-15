import React from 'react';
import { Link, browserHistory } from 'react-router';
import { PageHeader } from 'react-bootstrap'

import { APP_VERSION } from '../../common/AppSettings'

class Header extends React.Component {

    handleHeaderClick = () => {
        this.props.resetSelectGroup();
        browserHistory.push('/');
    };

    render() {
        return (
            <PageHeader><Link onClick={this.handleHeaderClick}>Learn-Words</Link> <small>(v. {APP_VERSION})</small></PageHeader>
        );
    }
}

export default Header;
