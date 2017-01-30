import { connect } from 'react-redux';

import { fetchGroups, addGroup, editGroup, deleteGroup, selectGroup, showGroupModalForm } from '../actions/groupsAction';
import GroupList from '../components/groups/GroupList';

const mapStateToProps = (state) => {
    return {
        groupList: state.groups.groupList,
        selectedGroup: state.groups.selectedGroup
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchGroups: () => dispatch(fetchGroups()),
        addGroup: (groupName) => dispatch(addGroup(groupName)),
        editGroup: (id) => dispatch(editGroup(id)),
        deleteGroup: (id) => dispatch(deleteGroup(id))
                                .then(response => dispatch(selectGroup(null)))
                                .catch((error) => console.log(error)),
        showModal: () => dispatch(showGroupModalForm(true))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupList);
