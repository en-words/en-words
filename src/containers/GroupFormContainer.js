import { connect } from 'react-redux';

import { addGroup, updateGroup } from '../actions/groupsAction';
import GroupForm from '../components/groups/GroupForm';

const mapStateToProps = () => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        addGroup: (groupName) => dispatch(addGroup(groupName)),
        updateGroup: (group) => dispatch(updateGroup(group))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupForm);
