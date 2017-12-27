import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Row, Col } from 'antd';
import { APP_VERSION } from '../../../common/AppSettings'
import './Header.css';

Header.propTypes = {
    onHeaderClick: PropTypes.func.isRequired,
    onLoginClick: PropTypes.func.isRequired,
    onLogoutClick: PropTypes.func.isRequired,
    user: PropTypes.object
};

function Header({ onHeaderClick, onLoginClick, onLogoutClick, user }) {

    return (
        <div className="page-header">
            <Row>
                <Col span={18}>
                    <Link className="font-size-28pt" onClick={onHeaderClick}>Learn-Words</Link> <small className="font-size-13pt">(v. {APP_VERSION})</small>
                </Col>
                <Col span={6} className="text-align-right padding-top-15px">{ user ?
                    <Link className="font-size-13pt " onClick={onLogoutClick}>Logout</Link> :
                    <Link className="font-size-13pt" onClick={onLoginClick}>Log in</Link>}
                </Col>
            </Row>
        </div>
    );
}

export default Header;
