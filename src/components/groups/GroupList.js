import React, { Component } from 'react';

import { ButtonGroup, Button, Glyphicon, Nav } from 'react-bootstrap';

import GroupRow from '../../containers/GroupRowContainer';
import GroupModalForm from '../../containers/GroupModalFormContainer';

class GroupList extends Component {

    constructor(props) {
        super(props);

        this.handelEditClick = this.handelEditClick.bind(this);
        this.handelDeleteClick = this.handelDeleteClick.bind(this);
        this.handelShowModal = this.handelShowModal.bind(this);
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
                <Nav bsStyle="pills" stacked>
                    { groups.map(group => <GroupRow key={group.groupId} group={group} />)}
                </Nav>

                <ButtonGroup className="align-right padding-top-5px">
                    <Button bsSize="small"  onClick={this.handelShowModal}>
                        <Glyphicon glyph="plus"/>
                    </Button>
                    <Button bsSize="small" onClick={this.handelShowModal} disabled={!this.props.selectedGroup}>
                        <Glyphicon glyph="pencil"/>
                    </Button>
                    <Button bsSize="small" onClick={this.handelDeleteClick} disabled={!this.props.selectedGroup}>
                        <Glyphicon glyph="remove"/>
                    </Button>
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

}

export default GroupList;
