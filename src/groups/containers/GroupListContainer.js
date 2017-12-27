import React, { Component }  from 'react';
import { connect } from 'react-redux';
//import { browserHistory } from 'react-router-dom';
import * as actions from '../actions/groupsAction';

import GroupList from './../components/GroupList/index';

class GroupListContainer extends Component {

    componentDidMount() {
        this.props.fetchGroups();
    }

    render() {
        const { groups, selectedGroup } = this.props;

        return (
            <GroupList
                groups={ groups }
                selectedGroup={ selectedGroup }
                handelGroupItemClick={ this.handelGroupItemClick }/>
        );
    }

    handelGroupItemClick = (e) => {
        this.props.selectGroup(e.key);
        //browserHistory.push(`words?groupId=${e.key}`);
    };
}

const mapStateToProps = (state) => {
    return {
        groups: state.groupsData.groups,
        selectedGroup: state.groupsData.selectedGroup
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchGroups: () => dispatch(actions.fetchGroups()),
        selectGroup: (id) => dispatch(actions.selectGroup(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupListContainer);
