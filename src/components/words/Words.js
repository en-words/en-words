import React from 'react';
import { Table, Button, Modal } from 'antd';
import responsiveVoice from '../../libraries/responsivevoice.js';
import './Words.css';
import WordForm from '../../containers/WordFormContainer';

const ButtonGroup = Button.Group;


class Words extends React.Component {
    playWord = (word) => {
        responsiveVoice.speak(word, 'UK English Male', {lang: "en-US"});
    };

    compareWord = (a, b) => {
        if (a.word.toLowerCase() === b.word.toLowerCase())
            return 0;

        if (a.word.toLowerCase() > b.word.toLowerCase())
            return 1;
        else
            return -1;
    };

    compareTranslation = (a, b) => {
        if (a.translation.toLowerCase() === b.translation.toLowerCase())
            return 0;

        if (a.translation.toLowerCase() > b.translation.toLowerCase())
            return 1;
        else
            return -1;
    };

    componentDidMount() {
        this.props.fetchWords(this.props.location.query.groupId);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.selectedGroup.groupId === nextProps.selectedGroup.groupId) {
            return;
        }

        this.props.fetchWords(nextProps.location.query.groupId);
    }

    newWord() {
        this.props.newWord();
    }

    deleteWord = (id) => {

        const deleteAction = () => {this.props.deleteWord(id)};

        Modal.confirm({
            title: 'Delete word',
            content: `Do you want to delete the word?`,
            okText: 'OK',
            cancelText: 'Cancel',
            onOk() {
                deleteAction();
            },
            onCancel() {}
        });

    };

    editWord = (word) => {
        this.props.editWord(word);
    };

    render() {
        const { words, error } = this.props.wordList;
        const { group } = this.props.selectedGroup;

        let content = <Table
            rowKey={record => record.id}
            dataSource={words}
            columns={[{
                         title: '',
                         dataIndex: 'play',
                         key: 'play',
                         width: '20px',
                         render: (text, record) => (
                             <Button id="playWord" icon="play-circle" onClick={() => this.playWord(record.word)} />
                         )
                      },
                      {
                          title: 'Word',
                          dataIndex: 'word',
                          key: 'word',
                          sorter: (a, b) => this.compareWord(a, b),
                          render:  (text, record) => <a onClick={() => {
                            this.editWord(record)}
                          }>{record.word}</a>
                      },
                      {
                          title: 'Translation',
                          dataIndex: 'translation',
                          key: 'translation',
                          sorter: (a, b) => this.compareTranslation(a, b)
                      },
                      {
                        title: '',
                        dataIndex: 'delete',
                        key: 'delete',
                        width: '20px',
                        render: (text, record) => (
                        <Button id="deleteWord" icon="delete" onClick={() => this.deleteWord(record.id)} />
                        )
                    }]}
            size="middle"
            pagination={false}/>;

        if(words && words.length === 0) {
            content = <b>No words in current group</b>
        }

        if(error) {
            return <div className="alert alert-danger">Error: {error.message}</div>
        }

        return (
            <div>
                <h3>{group} words:</h3>

                <ButtonGroup id="wordsToolBar" className="align-right">
                    <Button onClick={() => window.print()} disabled={words && words.length === 0} icon="export">Print</Button>
                    <Button icon="plus-circle-o" onClick={() => this.newWord()}>New</Button>
                </ButtonGroup>
                <br/> <br/>

                {content}

                <WordForm />
            </div>
        );
    }
}

export default Words;
