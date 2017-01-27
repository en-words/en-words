import { connect } from 'react-redux'
import { fetchGroups } from '../actions/groupsAction';
import Groups from '../components/Groups';

const mapStateToProps = (state) => {
    return {
        groupList: state.groups.groupList
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchGroups: () => dispatch(fetchGroups())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Groups);
