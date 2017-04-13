import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import * as actions from './../../groups/actions/groupsAction';

import Header from './../components/Header';

class HeaderContainer extends Component {

    render() {

        return (
            <Header onHeaderClick={ this.handelHeaderClick } />
        );
    }

    handelHeaderClick = () => {
        this.props.clearSelectedGroup();
        browserHistory.push('');
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        clearSelectedGroup: () => dispatch(actions.clearSelectedGroup())
    }
};

export default connect(null, mapDispatchToProps)(HeaderContainer);
