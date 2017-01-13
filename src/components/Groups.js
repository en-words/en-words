import React, {Component} from 'react';
import axios from 'axios';

import {REST_API_URL} from '../common/AppSettings'
import { ButtonGroup, Button, Glyphicon } from 'react-bootstrap';
import { Link } from 'react-router';

class Groups extends Component {

    constructor(props) {
        super(props);

        this.state = {
            groups: [],
            selectedGroup: undefined
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
            <div>
                <ul id="groupsNavBar" className="nav nav-pills nav-stacked">
                    { this.state.groups.map(group =>
                        <li key={group.groupId}>
                            <Link to={`/words?groupId=${group.groupId}`}
                                  onClick={() => this.setState({selectedGroup: {group}})}>{group.group}</Link>
                        </li>)}
                </ul>

                <ButtonGroup className="align-right padding-top-5px">
                    <Button bsSize="small">
                        <Glyphicon glyph="plus"/>
                    </Button>
                    <Button bsSize="small" disabled={!this.state.selectedGroup}>
                        <Glyphicon glyph="pencil"/>
                    </Button>
                    <Button bsSize="small" disabled={!this.state.selectedGroup}>
                        <Glyphicon glyph="remove"/>
                    </Button>
                </ButtonGroup>
            </div>
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
