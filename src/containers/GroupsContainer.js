import { connect } from 'react-redux'
import { fetchGroups, fetchGroupsSuccess, fetchGroupsFailure } from '../actions/groupsAction';
import Groups from '../components/Groups';

const mapStateToProps = (state) => {
    return {
        groups: state.groups
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchGroups: () => {
            dispatch(fetchGroups()).then((response) => {
                !response.error ? dispatch(fetchGroupsSuccess(response.value.data)) : dispatch(fetchGroupsFailure(response.value.data));
            });
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Groups);
