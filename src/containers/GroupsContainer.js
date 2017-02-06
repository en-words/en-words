import { connect } from 'react-redux';

import { fetchGroups, newGroup, editGroup, deleteGroup, selectGroup } from '../actions/groupsAction';
import Groups from '../components/groups/Groups';

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
                                .catch((error) => console.log(error)),
        newGroup: () => dispatch(newGroup()),
        editGroup: (group) => dispatch(editGroup(group))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Groups);
