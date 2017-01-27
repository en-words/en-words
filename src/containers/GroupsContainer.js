import { connect } from 'react-redux'
import { fetchGroups, addGroup, editGroup, deleteGroup } from '../actions/groupsAction';
import Groups from '../components/groups/Groups';

const mapStateToProps = (state) => {
    return {
        groupList: state.groups.groupList
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchGroups: () => dispatch(fetchGroups()),
        addGroup: (groupName) => dispatch(addGroup(groupName)),
        editGroup: (id) => dispatch(editGroup(id)),
        deleteGroup: (id) => dispatch(deleteGroup(id)).catch((error) => console.log("Error: " + error))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Groups);
