import { connect } from 'react-redux';

import { fetchWords, deleteWord, newWord, editWord } from '../actions/wordsAction';
import Words from '../components/words/Words';

const mapStateToProps = (state) => {
    return {
        wordList: state.words.wordList,
        selectedGroup: state.groups.selectedGroup
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchWords: (groupId) => dispatch(fetchWords(groupId)),
        deleteWord: (id) => dispatch(deleteWord(id)),
        newWord: () => dispatch(newWord()),
        editWord: (word) => dispatch(editWord(word))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Words);
