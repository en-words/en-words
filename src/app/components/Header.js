import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import { PageHeader } from 'react-bootstrap'


import { APP_VERSION } from '../../common/AppSettings'

const Header = (props) => {

    const { onHeaderClick } = props;

    return (
        <PageHeader>
            <Link onClick={onHeaderClick}>Learn-Words</Link> <small>(v. {APP_VERSION})</small>
        </PageHeader>
    );

};

Header.propTypes = {
    onHeaderClick: PropTypes.func.isRequired
};

export default Header;
