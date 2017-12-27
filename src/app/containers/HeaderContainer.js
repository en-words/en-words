import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import * as groupActions from './../../groups/actions/groupsAction';
import * as usersActions from './../../users/actions/usersAction';

import LoginForm from './../../users/containers/LoginFormContainer';
import Header from '../components/Header/Header';

class HeaderContainer extends Component {

    state = {
        showLoginFrom: false
    };

    render() {

        return (
            <div>
                <Header onHeaderClick={ this.handelHeaderClick }
                        onLoginClick={ this.handelLoginClick }
                        onLogoutClick={ this.props.logout }
                        user={ this.props.user }/>

                <LoginForm
                    visible={this.state.showLoginFrom}
                    onCloseModalForm={ this.handelLoginFormClose }/>
            </div>
        );
    }

    handelHeaderClick = () => {
        this.props.clearSelectedGroup();
        browserHistory.push('');
    };

    handelLoginClick = () => {
        this.setState({
            showLoginFrom: true
        })
    };

    handelLoginFormClose = () => {
        this.setState({
            showLoginFrom: false
        })
    };
}

const mapStateToProps = (state) => {
    return {
        user: state.userData.user
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        clearSelectedGroup: () => dispatch(groupActions.clearSelectedGroup()),
        logout: () => dispatch(usersActions.logout())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
