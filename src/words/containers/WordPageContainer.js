import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import WordList from './WordListContainer';
import WordToolBar from './WordToolBarContainer';
import WordModalFormContainer from './WordModalFormContainer';
import * as actions from "../../groups/actions/groupsAction";

class WordPageContainer extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            showWordForm: false,
            wordFormData: null
        };

        this.props.selectGroup(this.props.match.params.groupId);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.match.params.groupId === nextProps.match.params.groupId) {
            return;
        }

        this.props.selectGroup(nextProps.match.params.groupId);
    }

    render() {
        return (
            <div>
                <WordToolBar
                    onNewWord={this.handelNewWordClick}/><br/>

                <WordList
                    onEditWord={this.handelEditWordClick}/>

                <WordModalFormContainer
                    visible={this.state.showWordForm}
                    wordForm={this.state.wordFormData}
                    onCloseModalForm={this.handelCloseModalForm}/>
            </div>
        );
    }

    handelCloseModalForm = () => {
        this.setState({
            showWordForm: false,
            wordFormData: null
        });
    };

    handelNewWordClick = () => {
        this.setState({
            showWordForm: true,
            wordFormData: null
        });
    };

    handelEditWordClick = (word) => {
        this.setState({
            showWordForm: true,
            wordFormData: word
        });
    };
}

WordPageContainer.propTypes = {
    selectedGroup: PropTypes.object
};


const mapDispatchToProps = (dispatch) => {
    return {
        selectGroup: (id) => dispatch(actions.selectGroup(id))
    }
};

export default connect(null, mapDispatchToProps)(WordPageContainer);
