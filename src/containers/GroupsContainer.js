import { connect } from 'react-redux';

import { fetchGroups, deleteGroup, selectGroup, resetSelectGroup } from '../actions/groupsAction';
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
        resetSelectGroup: () => dispatch(resetSelectGroup()),
        deleteGroup: (id) => dispatch(deleteGroup(id))
                                .then(response => dispatch(selectGroup(null)))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Groups);
