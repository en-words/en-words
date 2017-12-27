import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import './GroupList.css';

const GroupList = (props) => {

    const { groups, selectedGroup } = props;

    if(groups.length === 0) {
        return (
            <div className="align-text-left">
                <span>No groups</span><br/>
            </div>
        )
    }

    return (
        <Menu id="menuSideBar" mode="inline"
              selectedKeys={selectedGroup ? [selectedGroup.id] : []}  className="group-list">

            { groups.map(group =>
                <Menu.Item key={ group.id } className="align-text-left">
                    <Link to={`/words/${group.id}`}>{group.groupName}</Link>
                </Menu.Item>)
            }
        </Menu>
    )
};

GroupList.propTypes = {
    groups: PropTypes.array.isRequired
};

export default GroupList;
