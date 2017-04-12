import React from 'react';
import { Menu } from 'antd';
import './GroupList.css';

const GroupList = (props) => {

    const { groups, handelGroupItemClick, selectedGroup } = props;

    if(groups.length === 0) {
        return (
            <div className="align-text-left">
                <span>No groups</span><br/>
            </div>
        )
    }

    return (
        <Menu id="menuSideBar" mode="inline" onClick={ handelGroupItemClick }
              selectedKeys={selectedGroup ? [selectedGroup.id] : []}  className="group-list">

            { groups.map(group =>
                <Menu.Item key={ group.id } className="align-text-left">{ group.groupName }</Menu.Item>)
            }
        </Menu>
    )
};

GroupList.propTypes = {
    groups: React.PropTypes.array.isRequired,
    handelGroupItemClick: React.PropTypes.func.isRequired
};

export default GroupList;
