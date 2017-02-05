import { connect } from 'react-redux';

import { fetchWords } from '../actions/wordsAction';
import Words from '../components/words/Words';

const mapStateToProps = (state) => {
    return {
        wordList: state.words.wordList,
        selectedGroup: state.groups.selectedGroup
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchWords: (groupId) => dispatch(fetchWords(groupId))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Words);
