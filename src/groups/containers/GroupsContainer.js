import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { Modal } from 'antd';

import { fetchGroups, selectGroup, addGroup, deleteGroup } from '../actions/groupsAction';
import GroupList from '../components/GroupList/index';
import GroupToolBar from '../components/GroupToolBar/index';
import ModalGroupForm from '../containers/GroupFormContainer';

class GroupsContainer extends Component {

    state = {
        showGroupForm: false,
        groupFormData: {groupname: ''},
        groupFormTitle: ''
    };

    componentDidMount() {
        this.props.fetchGroups();
    }

    render() {
        const { groups, selectedGroup } = this.props;

        return (
            <div>
                <GroupList
                    groups={ groups }
                    handelGroupItemClick={ this.handelGroupItemClick }/>

                <GroupToolBar
                    handelNewClick={ this.handelNewClick }
                    handelEditClick={ this.handelEditClick }
                    handelDeleteClick={ this.handelDeleteClick }
                    selectedGroup={ selectedGroup }/>

                <ModalGroupForm
                    initialValues={ this.state.groupFormData }
                    visible={ this.state.showGroupForm }
                    title={ this.state.groupFormTitle }
                    onCancel={ this.handelCloseGroupFormClick }
                    onOk={ this.handelOkGroupFormClick }/>
            </div>
        )
    }

    handelGroupItemClick = (e) => {
        this.props.selectGroup(e.key);
        browserHistory.push(`words?groupId=${e.key}`);
    };

    handelNewClick = () => {
        this.setState({
            showGroupForm: true,
            groupFormData: {groupName: ''},
            groupFormTitle: 'New group'
        });
    };

    handelEditClick = () => {
        this.setState({
            showGroupForm: true,
            groupFormData: this.props.selectedGroup,
            groupFormTitle: 'Edit group'
        });
    };

    handelDeleteClick = () => {

        Modal.confirm({
            title: 'Delete group',
            content: `Do you want to delete the group "${this.props.selectedGroup.groupName}" with all words?`,
            onOk: () => this.props.deleteGroup(this.props.selectedGroup.id)
        });
    };

    handelCloseGroupFormClick = () => {
        this.setState({
            showGroupForm: false
        });
    };

    handelOkGroupFormClick = (group) => {
        this.setState({
            showGroupForm: false
        });

        this.props.addGroup(group.groupName);
    }
}

const mapStateToProps = (state) => {
    return {
        groups: state.groupsData.groups,
        selectedGroup: state.groupsData.selectedGroup
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchGroups: () => dispatch(fetchGroups()),
        selectGroup: (id) => dispatch(selectGroup(id)),
        addGroup: (name) => dispatch(addGroup(name)),
        deleteGroup: (id) => dispatch(deleteGroup(id))
            .then(response => dispatch(selectGroup(null)))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupsContainer);
