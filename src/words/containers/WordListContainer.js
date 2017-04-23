import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { Modal } from "antd";
import responsiveVoice from "../../libraries/responsivevoice.js";

import WordList from './../components/WordList/WordList';
import * as actions from "./../actions/wordsAction";

class WordListContainer extends React.Component {

    static propTypes = {
        words: PropTypes.array,
        selectedGroup: PropTypes.object,
        fetchWords: PropTypes.func.isRequired,
        deleteWord: PropTypes.func.isRequired,
        onEditWord: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.fetchWords(this.props.selectedGroup.id);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.selectedGroup.id === nextProps.selectedGroup.id) {
             return;
        }

        this.props.fetchWords(nextProps.selectedGroup.id);
    }

    render() {
        const { words, onEditWord } = this.props;

        if(!words) {
            return <p>No words</p>
        }

        return (
            <WordList
                words={words}
                onPlayWord={this.handlePlayWord}
                onDeleteWord={this.handleDeleteWord}
                onEditWord={onEditWord}/>
        );
    }

    handlePlayWord = (word) => {
        responsiveVoice.speak(word, 'UK English Male', {lang: "en-US"});
    };

    handleDeleteWord = (id) => {
        Modal.confirm({
            title: 'Delete word',
            content: 'Do you want to delete the word?',
            onOk: () => this.props.deleteWord(this.props.selectedGroup.id, id)
        });

    };
}

const mapStateToProps = (state) => {
    return {
        words: state.wordsData.words,
        selectedGroup: state.groupsData.selectedGroup
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchWords: (groupId) => dispatch(actions.fetchWords(groupId)),
        deleteWord: (groupId, id) => dispatch(actions.deleteWord(groupId, id)),
        updateWord: (word) => dispatch(actions.updateWord())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(WordListContainer);
