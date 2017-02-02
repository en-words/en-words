import React, { Component } from 'react';

import { Button, Modal } from 'antd';

import { Nav } from 'react-bootstrap';

import GroupRow from '../../containers/GroupRowContainer';
import GroupModalForm from '../../containers/GroupModalFormContainer';

const ButtonGroup = Button.Group;

class GroupList extends Component {

    constructor(props) {
        super(props);

        this.handelEditClick = this.handelEditClick.bind(this);
        this.handelDeleteClick = this.handelDeleteClick.bind(this);
        this.handelShowModal = this.handelShowModal.bind(this);
        this.confirmDeleteGroup = this.confirmDeleteGroup.bind(this);
    }

    componentWillMount() {
        this.props.fetchGroups();
    }

    render() {
        const { groups, error, loading } = this.props.groupList;

        if(loading) {
            return <div><h3>Groups loading...</h3></div>
        } else if(error) {
            return <div className="alert alert-danger">Error: {error.message}</div>
        }

        return (
            <div>
                <Nav bsStyle="pills" stacked id="groupsNavBar">
                    { groups.map(group => <GroupRow key={group.groupId} group={group} />)}
                </Nav>

                <ButtonGroup className="align-right padding-top-5px">
                    <Button onClick={this.handelShowModal} icon="plus-circle-o" />
                    <Button onClick={this.handelShowModal} disabled={!this.props.selectedGroup} icon="edit" />
                    <Button onClick={this.confirmDeleteGroup} disabled={!this.props.selectedGroup} icon="delete" />
                </ButtonGroup>

                <GroupModalForm />
            </div>
        )
    }

    handelDeleteClick() {
        if(confirm(`Do you want to delete the group ${this.props.selectedGroup.group} with all words?`)) {
            this.props.deleteGroup(this.props.selectedGroup.groupId);
        }
    }

    handelEditClick() {
        this.props.editGroup(this.props.selectedGroup.groupId)
    }

    handelShowModal() {
        this.props.showModal();
    }

    confirmDeleteGroup() {
        const deleteGroup = () => {this.props.deleteGroup(this.props.selectedGroup.groupId)};

        Modal.confirm({
            title: 'Delete group',
            content: `Do you want to delete the group "${this.props.selectedGroup.group}" with all words?`,
            okText: 'OK',
            cancelText: 'Cancel',
            onOk() {
                deleteGroup();
            },
            onCancel() {}
        });
    }

}

export default GroupList;
