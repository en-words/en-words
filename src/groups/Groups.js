import React, {Component} from 'react';
import { Link } from 'react-router';
import axios from 'axios';

import {AppSettings} from '../common/AppSettings'

class Groups extends Component {

    constructor(props) {
        super(props);

        this.state = {
            groups: []
        };
    }

    componentDidMount() {
        axios.get(AppSettings.REST_API_URL + 'groups')
            .then(res => this.setState({groups: res.data}));
    }

    render() {
        return (
            <ul className="nav nav-pills nav-stacked">
                { this.state.groups.map(group =>
                    <li key={group.groupId}><Link to={'/words?groupId=' + group.groupId}>{group.group}</Link></li>) }
            </ul>
        )
    }
}

export default Groups;
