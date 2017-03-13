import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { Spin, Modal } from 'antd';
import { fetchGroups, selectGroup, deleteGroup } from '../actions/groupsAction';
import GroupList from '../components/GroupList';
import GroupToolBar from '../components/GroupToolBar';

class GroupsContainer extends Component {

    componentDidMount() {
        this.props.fetchGroups();
    }

    render() {
        const { groups, error, loading } = this.props.groupList;
        const { selectedGroup } = this.props;

        if(loading) {
            return <Spin/>
        } else if(error) {
            return <div className="alert alert-danger">Error: {error.message}</div>
        }

        return (
            <div>
                <GroupList
                    groups={ groups }
                    handelGroupItemClick={ this.handelGroupItemClick }/>

                <GroupToolBar
                    handelNewClick={ this.handelNewClick }
                    handelEditClick={ this.handelEditClick }
                    handelDeleteClick={ this.handelDeleteClick }
                    selectedGroup={ selectedGroup }/>
            </div>
        )
    }

    handelGroupItemClick = (e) => {
        this.props.selectGroup(e.key);
        browserHistory.push(`words?groupId=${e.key}`);
    };

    handelNewClick = () => {
        this.setState({
            showGroupModalForm: true,
            groupForm: null
        });
    };

    handelEditClick = () => {
        this.setState({
            showGroupModalForm: true,
            groupForm: this.props.selectedGroup
        });
    };

    handelDeleteClick = () => {

        Modal.confirm({
            title: 'Delete group',
            content: `Do you want to delete the group "${this.props.selectedGroup.group}" with all words?`,
            onOk: () => this.props.deleteGroup(this.props.selectedGroup.groupId)
        });
    };
}

const mapStateToProps = (state) => {
    return {
        groupList: state.groups.groupList,
        selectedGroup: state.groups.selectedGroup
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchGroups: () => dispatch(fetchGroups()),
        selectGroup: (id) => dispatch(selectGroup(id)),
        deleteGroup: (id) => dispatch(deleteGroup(id))
            .then(response => dispatch(selectGroup(null)))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupsContainer);
