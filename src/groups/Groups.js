import React, {Component} from 'react';
import { Link } from 'react-router';
import axios from 'axios';

import {REST_API_URL} from '../common/AppSettings'

class Groups extends Component {

    constructor(props) {
        super(props);

        this.state = {
            groups: []
        };
    }

    componentDidMount() {
        axios.get(REST_API_URL + 'groups')
            .then(res =>
            {
                let groupList = res.data;
                groupList = groupList.sort((a, b) => this.compareGroup(a, b));
                this.setState({groups: groupList});
            });
    }

    render() {
        return (
            <ul id="groupsNavBar" className="nav nav-pills nav-stacked">
                {
                    this.state.groups.map(group =>
                        <li key={group.groupId}>
                            <Link activeClassName='active' to={`/words?groupId=${group.groupId}`}>{group.group}</Link>
                        </li>)
                }
            </ul>
        )
    }

    compareGroup(a, b) {
        if (a.group.toLowerCase() === b.group.toLowerCase())
            return 0;

        if (a.group.toLowerCase() > b.group.toLowerCase())
            return 1;
        else
            return -1;
    }
}

export default Groups;
