import React from 'react';
import { browserHistory } from 'react-router';
import { Button, Modal, Spin, Menu } from 'antd';
import GroupForm from '../../containers/GroupFormContainer';


const ButtonGroup = Button.Group;

class Groups extends React.Component {

    constructor(props) {
        super(props);

        this.handelEditClick = this.handelEditClick.bind(this);
        this.handelDeleteClick = this.handelDeleteClick.bind(this);
        this.handelNewClick = this.handelNewClick.bind(this);
    }

    componentDidMount() {
        this.props.fetchGroups();
    }

    render() {
        const { groups, error, loading } = this.props.groupList;

        if(loading) {
            return <Spin />
        } else if(error) {
            return <div className="alert alert-danger">Error: {error.message}</div>
        }

        return (
            <div>
                <Menu id="groupsNavBar" mode="inline" onClick={(e) => {
                        this.props.selectGroup(e.key);
                        browserHistory.push(`words?groupId=${e.key}`);}}>

                    { groups.map(group =>
                        <Menu.Item key={group.groupId} className="align-text-left">
                            <span className="nav-text">{group.group}</span>
                        </Menu.Item>
                    )}
                </Menu>

                <ButtonGroup id="groupButtons" className="align-right padding-top-5px">
                    <Button onClick={this.handelNewClick} icon="plus-circle-o" />
                    <Button onClick={this.handelEditClick} disabled={!this.props.selectedGroup} icon="edit" />
                    <Button onClick={this.handelDeleteClick} disabled={!this.props.selectedGroup} icon="delete" />
                </ButtonGroup>

                <GroupForm />
            </div>
        )
    }

    handelEditClick() {
        this.props.editGroup(this.props.selectedGroup)
    }

    handelNewClick() {
        this.props.newGroup();
    }

    handelDeleteClick() {
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

export default Groups;
