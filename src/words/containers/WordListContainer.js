import { connect } from 'react-redux';

import * as actions from '../actions/wordsAction';
import WordList from '../components/WordList/WordList';

const mapStateToProps = (state) => {
    return {
        words: state.wordsData.words,
        selectedGroup: state.groupsData.selectedGroup
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchWords: (groupId) => dispatch(actions.fetchWords(groupId))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(WordList);
