import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { Modal } from 'antd';

import GroupList from './GroupListContainer';
import GroupToolBar from './GroupToolBarContainer';
import ModalGroupForm from './GroupModalFormContainer';

import * as actions from '../actions/groupsAction';

class GroupPageContainer extends Component {

    state = {
        showGroupForm: false,
        groupFormData: {groupName: ''},
        groupFormTitle: ''
    };

    render() {
        return (
            <div>
                <GroupList />

                <GroupToolBar
                    onNewGroup={ this.handelNewGroup }
                    onEditGroup={ this.handelEditGroup }
                    onDeleteGroup={ this.handelDeleteGroup } />

                <ModalGroupForm
                    visible={ this.state.showGroupForm }
                    title={ this.state.groupFormTitle }
                    groupForm={ this.state.groupFormData }
                    onClose={ this.handelCloseGroupModalForm } />
            </div>
        )
    }

    handelNewGroup = () => {
        this.setState({
            showGroupForm: true,
            groupFormData: null,
            groupFormTitle: 'New group'
        });
    };

    handelEditGroup = () => {
        this.setState({
            showGroupForm: true,
            groupFormData: this.props.selectedGroup,
            groupFormTitle: 'Edit group'
        });
    };

    handelDeleteGroup = () => {
        Modal.confirm({
            title: 'Delete group',
            content: `Do you want to delete the group "${this.props.selectedGroup.groupName}" with all words?`,
            onOk: () => this.props.deleteGroup(this.props.selectedGroup.id)
        });
    };

    handelCloseGroupModalForm = () => {
        this.setState({
            showGroupForm: false
        });
    };
}

const mapStateToProps = (state) => {
    return {
        selectedGroup: state.groupsData.selectedGroup
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteGroup: (id) => dispatch(actions.deleteGroup(id)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupPageContainer);
