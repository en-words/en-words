import React from "react";
import {connect} from "react-redux";
import {browserHistory} from "react-router";
import {Table, Button, Input, Modal} from "antd";
import * as actions from "./../actions/wordsAction";
import responsiveVoice from "../../libraries/responsivevoice.js";

class WordListContainer extends React.Component {

    playWord = (word) => {
        responsiveVoice.speak(word, 'UK English Male', {lang: "en-US"});
    };

    componentDidMount() {
        this.props.fetchWords(this.props.selectedGroup.id);
    }

    componentWillReceiveProps(nextProps) {
        /*if (this.props.selectedGroup.id === nextProps.selectedGroup.id) {
         return;
         }

         this.props.fetchWords(nextProps.location.query.groupId);*/
    }

    deleteWord = (id) => {
        Modal.confirm({
            title: 'Delete word',
            content: 'Do you want to delete the word?',
            onOk: () => this.props.deleteWord(id)
        });

    };

    editWord = (word) => {
        this.props.editWord(word);
    };

    render() {

        let content = <Table
            rowKey={record => record.id}
            dataSource={words}
            columns={[{
                    title: '',
                    dataIndex: 'play',
                    key: 'play',
                    width: '20px',
                    render: (text, record) => (
                        <Button id="playWord" shape="circle" icon="play-circle" onClick={() => this.playWord(record.word)}/>
                    )
                },
                {
                    title: 'Word',
                    dataIndex: 'word',
                    key: 'word',
                    //sorter: (a, b) => this.compareData(a.word, b.word),
                    render: (text, record) => <a onClick={() => {
                        this.editWord(record)
                    }
                    }>{record.word}</a>
                },
                {
                    title: 'Translation',
                    dataIndex: 'translation',
                    key: 'translation',
                    //sorter: (a, b) => this.compareData(a.translation, b.translation)
                },
                {
                    title: '',
                    dataIndex: 'comment',
                    key: 'comment',
                    width: '20px',
                    render: (text, record) => {
                        if (record.comments) {
                            return <Popover content={record.comments} title="Comments:" trigger="click">
                                <Button id="btnComment" icon="info" shape="circle"/>
                            </Popover>
                        }
                    }
                },
                {
                    title: '',
                    dataIndex: 'delete',
                    key: 'delete',
                    width: '20px',
                    render: (text, record) => (
                        <Button id="deleteWord" shape="circle" icon="delete"
                                onClick={() => this.deleteWord(record.id)}/>
                    )
                }]}
            size="middle"
            pagination={false}/>;

        if (error) {
            return <div className="alert alert-danger">Error: {error.message}</div>
        }
        return (
            <div>
                {content}
            </div>
        );
    }
}


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

export default connect(mapStateToProps, mapDispatchToProps)(WordListContainer);
