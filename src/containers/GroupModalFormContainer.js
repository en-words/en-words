import { connect } from 'react-redux';

import { showGroupModalForm, addGroup } from '../actions/groupsAction';
import GroupModalForm from '../components/groups/GroupModalForm';

const mapStateToProps = (state) => {
    return {
        showGroupForm: state.groups.showGroupForm
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        closeModal: (groupName) => dispatch(showGroupModalForm(false)),
        addGroup: (groupName) => dispatch(addGroup(groupName))
                                    .then(dispatch(showGroupModalForm(false)))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupModalForm);
