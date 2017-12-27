import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../actions/wordsAction';
import WordModalForm from '../components/WordModalForm/WordModalForm';


class WordModalFormContainer extends React.Component {

    static propTypes = {
        visible: PropTypes.bool.isRequired,
        wordForm: PropTypes.object,
        selectedGroup: PropTypes.object.isRequired,
        onCloseModalForm: PropTypes.func.isRequired,
        addWord: PropTypes.func.isRequired,
        updateWord: PropTypes.func.isRequired,
    };

    render() {
        let { visible, wordForm } = this.props;
        const title = wordForm === null ? 'New word' : 'Edit word';

        return (
            <WordModalForm
                ref={this.saveFormRef}
                title={title}
                visible={visible}
                wordForm={wordForm}
                onCancel={this.handelCloseClick}
                onCreate={this.handelAddClick} />
        )
    }

    handelCloseClick = () => {
        this.form.resetFields();
        this.props.onCloseModalForm();
    };

    handelAddClick = () => {
        const { wordForm, selectedGroup, addWord, updateWord, onCloseModalForm } = this.props;
        const form = this.form;

        form.validateFields((err, values) => {
            if (err) {
                return;
            }

            if(wordForm === null) {
                addWord({
                    word: values.word,
                    translation: values.translation,
                    groupId: selectedGroup.id,
                    comments: values.comments
                });
            } else {
                updateWord({
                    id: wordForm.id,
                    word: values.word,
                    translation: values.translation,
                    groupId: selectedGroup.id,
                    comments: values.comments
                });
            }
            form.resetFields();
            onCloseModalForm();
        });
    };

    saveFormRef = (form) => {
        this.form = form;
    };
}


const mapStateToProps = (state) => {
    return {
        selectedGroup: state.groupsData.selectedGroup
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addWord: (word) => dispatch(actions.addWord(word)),
        updateWord: (word) => dispatch(actions.updateWord(word))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(WordModalFormContainer);
