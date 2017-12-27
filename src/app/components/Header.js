import React from 'react';
import { Link } from 'react-router-dom';

import { PageHeader } from 'react-bootstrap'


import { APP_VERSION } from '../../common/AppSettings'

const Header = () => {

    return (
        <PageHeader>
            <Link to="/">Learn-Words</Link> <small>(v. {APP_VERSION})</small>
        </PageHeader>
    );

};

export default Header;
