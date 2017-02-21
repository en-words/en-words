import React from 'react';
import { PageHeader } from 'react-bootstrap'

import { APP_VERSION } from '../../common/AppSettings'

class Header extends React.Component {

    render() {
        return (
            <PageHeader><span className="blue-text-color">Learn-Words</span> <small>(v. {APP_VERSION})</small></PageHeader>
        );
    }
}

export default Header;
