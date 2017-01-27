import { connect } from 'react-redux';

import { selectGroup } from '../actions/groupsAction';
import GroupRow from '../components/groups/GroupRow';

const mapStateToProps = (state) => {
    return {
        selectedGroup: state.groups.selectedGroup
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectGroup: (group) => dispatch(selectGroup(group))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupRow);
