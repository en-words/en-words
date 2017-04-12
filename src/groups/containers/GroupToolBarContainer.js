import React, { Component }  from 'react';
import { connect } from 'react-redux';

import GroupToolBar from './../components/GroupToolBar/index';

class GroupToolBarContainer extends Component {

    render() {
        const {selectedGroup, onNewGroup, onEditGroup, onDeleteGroup } = this.props;
        return (
            <GroupToolBar
                onNewGroup={onNewGroup}
                onEditGroup={onEditGroup}
                onDeleteGroup={onDeleteGroup}
                selectedGroup={selectedGroup}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        selectedGroup: state.groupsData.selectedGroup
    };
};

export default connect(mapStateToProps, null)(GroupToolBarContainer);
