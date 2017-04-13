import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import WordList from './WordListContainer';
import WordToolBar from './WordToolBarContainer';

class WordPageContainer extends React.Component {

    static propTypes = {
        selectedGroup: PropTypes.object
    };

    static defaultProps = {
        selectedGroup: {
            id: '-1',
            groupName: ''
        }
    };

    render() {
        const { selectedGroup } = this.props;

        return (
            <div>
                <h3>{selectedGroup.groupName} words:</h3>

                <WordToolBar /><br/>

                <WordList />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        selectedGroup: state.groupsData.selectedGroup
    };
};

export default connect(mapStateToProps, null)(WordPageContainer);
