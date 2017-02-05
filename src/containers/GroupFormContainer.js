import { connect } from 'react-redux';

import { showGroupModalForm, addGroup } from '../actions/groupsAction';
import GroupForm from '../components/groups/GroupForm';

const mapStateToProps = (state) => {
    return {
        showGroupForm: state.groups.showGroupForm,
        group: state.group
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        closeModal: (groupName) => dispatch(showGroupModalForm(false)),
        addGroup: (groupName) => dispatch(addGroup(groupName))
                                    .then(dispatch(showGroupModalForm(false)))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupForm);
