import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import { NavItem } from 'react-bootstrap';

class GroupRow extends Component {

    render() {
        const { group, selectedGroup } = this.props;

        return (
            <NavItem onClick={e => {
                e.preventDefault();
                this.props.selectGroup(group);
                browserHistory.push(`words?groupId=${group.groupId}`);
            }} className={ selectedGroup && group.groupId === selectedGroup.groupId ? 'active' : ''} >{group.group}</NavItem>
        )
    }

}

export default GroupRow;
