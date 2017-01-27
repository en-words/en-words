import React, {Component} from 'react';

import { ButtonGroup, Button, Glyphicon } from 'react-bootstrap';
import { Link } from 'react-router';

class Groups extends Component {

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
                <ul id="groupsNavBar" className="nav nav-pills nav-stacked">
                    { groups.map(group =>
                        <li key={group.groupId}>
                            <Link to={`/words?groupId=${group.groupId}`}
                                  onClick={() => this.setState({selectedGroup: {group}})}>{group.group}</Link>
                        </li>)}
                </ul>

                <ButtonGroup className="align-right padding-top-5px">
                    <Button bsSize="small">
                        <Glyphicon glyph="plus"/>
                    </Button>
                    <Button bsSize="small">
                        <Glyphicon glyph="pencil"/>
                    </Button>
                    <Button bsSize="small">
                        <Glyphicon glyph="remove"/>
                    </Button>
                </ButtonGroup>
            </div>
        )
    }

/*    compareGroup(a, b) {
        if (a.group.toLowerCase() === b.group.toLowerCase())
            return 0;

        if (a.group.toLowerCase() > b.group.toLowerCase())
            return 1;
        else
            return -1;
    }*/
}

export default Groups;
