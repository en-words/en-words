import { connect } from 'react-redux';

import { addGroup, updateGroup, closeGroupModalForm } from '../actions/groupsAction';
import GroupForm from '../components/groups/GroupForm';

const mapStateToProps = (state) => {
    return {
        showGroupForm: state.groups.showGroupForm,
        groupForm: state.groups.groupForm
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        closeModal: (groupName) => dispatch(closeGroupModalForm()),
        addGroup: (groupName) => dispatch(addGroup(groupName))
                                    .then(dispatch(closeGroupModalForm())),
        updateGroup: (group) => dispatch(updateGroup(group))
                                    .then(dispatch(closeGroupModalForm()))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupForm);
