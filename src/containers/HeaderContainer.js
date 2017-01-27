import { connect } from 'react-redux';

import { resetSelectGroup } from '../actions/groupsAction';
import Header from '../components/Header';

const mapStateToProps = (state) => {
    return {
        selectedGroup: state.groups.selectedGroup
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        resetSelectGroup: () => dispatch(resetSelectGroup())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
