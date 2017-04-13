import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import * as actions from './../actions/wordsAction';
import WordToolBar from './../components/WordToolBar/WordToolBar';

class WordToolBarContainer extends React.Component {

    static propTypes = {
        selectedGroup: PropTypes.object,
        searchWords: PropTypes.func.isRequired,
        onNewWord: PropTypes.func
    };

    static defaultProps = {
        selectedGroup: {
            id: '-1',
            groupName: ''
        }
    };

    searchWords = (searchText) => {
        this.props.searchWords(this.props.selectedGroup.groupId, searchText);
    };

    render() {
        const { words, onNewWord } = this.props;

        return (
            <WordToolBar
                words={words}
                onSearchWord={this.searchWords}
                onNewWord={onNewWord}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        words: state.wordsData.words,
        selectedGroup: state.groupsData.selectedGroup,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        searchWords: (groupId, searchText) => dispatch(actions.searchWords(groupId, searchText))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(WordToolBarContainer);
