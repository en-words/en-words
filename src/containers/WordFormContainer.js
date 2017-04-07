import { connect } from 'react-redux';

import { addWord, updateWord, closeWordModalForm } from '../actions/wordsAction';
import WordForm from '../components/words/WordForm';

const mapStateToProps = (state) => {
    return {
        selectedGroup: state.groupsData.selectedGroup,
        showWordForm: state.words.showWordForm,
        wordForm: state.words.wordForm
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        closeWordModalForm: () => dispatch(closeWordModalForm()),
        addWord: (word) => dispatch(addWord(word))
                                    .then(dispatch(closeWordModalForm())),
        updateWord: (word) => dispatch(updateWord(word))
                                    .then(dispatch(closeWordModalForm()))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(WordForm);
