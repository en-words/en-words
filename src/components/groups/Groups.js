import React from 'react';
import { browserHistory } from 'react-router';
import { Button, Modal, Spin, Menu, Icon } from 'antd';
import GroupForm from '../../containers/GroupFormContainer';

const ButtonGroup = Button.Group;
const SubMenu = Menu.SubMenu;

class Groups extends React.Component {

    componentDidMount() {
        this.props.fetchGroups();
    }

    handelEditClick = () => {
        this.props.editGroup(this.props.selectedGroup)
    };

    handelNewClick = () => {
        this.props.newGroup();
    };

    handelDeleteClick = () => {
        const deleteGroup = () => {this.props.deleteGroup(this.props.selectedGroup.groupId)};

        Modal.confirm({
            title: 'Delete group',
            content: `Do you want to delete the group "${this.props.selectedGroup.group}" with all words?`,
            onOk() {
                deleteGroup();
            }
        });
    };

    handelMenuItemClick = (e) => {
        if(e.key === 'menuDashboard') {
            this.props.resetSelectGroup();
            browserHistory.push('/');
        } else if (e.key !== 'subGroups') {
            this.props.selectGroup(e.key);
            browserHistory.push(`words?groupId=${e.key}`);
        }
    };

    render() {
        const { groups, error, loading } = this.props.groupList;

        if(loading) {
            return <Spin />
        } else if(error) {
            return <div className="alert alert-danger">Error: {error.message}</div>
        }

        return (
            <div>
                <Menu id="menuSideBar" mode="inline" defaultSelectedKeys={['menuDashboard']} openKeys={['subGroups']} onClick={this.handelMenuItemClick}>

                    <Menu.Item key="menuDashboard" className="align-text-left">
                        <span><Icon type="home" /><span>Dashboard</span></span>
                    </Menu.Item>

                    <SubMenu key="subGroups" className="align-text-left" title={<span><Icon type="appstore-o" /><span>Word Groups</span></span>}>

                        { groups.map(group =>
                            <Menu.Item key={group.groupId} className="align-text-left">
                                <span className="nav-text">{group.group}</span>
                            </Menu.Item>
                        )}
                    </SubMenu>
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
}

export default Groups;
