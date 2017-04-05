import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { Modal } from 'antd';

import { fetchGroups, selectGroup, addGroup, deleteGroup } from '../actions/groupsAction';
import GroupList from '../components/GroupList/index';
import GroupToolBar from '../components/GroupToolBar/index';
import GroupForm from '../containers/GroupFormContainer';

class GroupsContainer extends Component {

    state = {
        showGroupForm: false,
        groupFormData: null,
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

                <GroupForm
                    groupFormData={ this.state.groupFormData }
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
            groupForm: null,
            groupFormTitle: 'New group'
        });
    };

    handelEditClick = () => {
        this.setState({
            showGroupForm: true,
            groupForm: this.props.selectedGroup,
            groupFormTitle: 'Edit group'
        });
    };

    handelDeleteClick = () => {

        Modal.confirm({
            title: 'Delete group',
            content: `Do you want to delete the group "${this.props.selectedGroup.name}" with all words?`,
            onOk: () => this.props.deleteGroup(this.props.selectedGroup.id)
        });
    };

    handelCloseGroupFormClick = () => {
        this.setState({
            showGroupForm: false
        });
    }

    handelOkGroupFormClick = (values) => {
        this.setState({
            showGroupForm: false
        });

        this.props.addGroup(values.name);
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
