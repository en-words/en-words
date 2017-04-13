import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import WordList from './WordListContainer';
import WordToolBar from './WordToolBarContainer';
import WordModalFormContainer from './WordModalFormContainer';

class WordPageContainer extends React.Component {

    state = {
        showWordForm: false,
        wordFormData: null
    };

    static propTypes = {
        selectedGroup: PropTypes.object
    };

    render() {
        const { selectedGroup } = this.props;

        return (
            <div>
                <h3>{selectedGroup.groupName} words:</h3>

                <WordToolBar
                    onNewWord={this.handelNewWordClick}/><br/>

                <WordList />

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
}

const mapStateToProps = (state) => {
    return {
        selectedGroup: state.groupsData.selectedGroup
    };
};

export default connect(mapStateToProps, null)(WordPageContainer);
