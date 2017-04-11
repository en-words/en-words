import React from 'react';
import { Table, Button, Input, Modal } from 'antd';
import responsiveVoice from '../../../libraries/responsivevoice.js';
import './WordList.css';

const ButtonGroup = Button.Group;
const Search = Input.Search;

class Words extends React.Component {
    playWord = (word) => {
        responsiveVoice.speak(word, 'UK English Male', {lang: "en-US"});
    };

    compareData = (a, b) => {
        if (a.toLowerCase() === b.toLowerCase())
            return 0;

        if (a.toLowerCase() > b.toLowerCase())
            return 1;
        else
            return -1;
    };

    componentDidMount() {
        //this.props.fetchWords(this.props.location.query.groupId);
    }

    componentWillReceiveProps(nextProps) {
        //if (this.props.selectedGroup.id === nextProps.selectedGroup.id) {
        //    return;
        //}

        //this.props.fetchWords(nextProps.location.query.groupId);
    }

    newWord = () => {
        this.props.newWord();
    };

    deleteWord = (id) => {
        const deleteAction = () => {this.props.deleteWord(id)};

        Modal.confirm({
            title: 'Delete word',
            content: 'Do you want to delete the word?',
            onOk() {
                deleteAction();
            }
        });

    };

    editWord = (word) => {
        this.props.editWord(word);
    };

    searchWords = (searchText) => {
      this.props.searchWords(this.props.selectedGroup.groupId, searchText);
    };

    render() {
        const { selectedGroup } = this.props;

    /*
        let content = <Table
            rowKey={record => record.id}
            dataSource={words}
            columns={[{
                         title: '',
                         dataIndex: 'play',
                         key: 'play',
                         width: '20px',
                         render: (text, record) => (
                             <Button id="playWord" shape="circle" icon="play-circle" onClick={() => this.playWord(record.word)} />
                         )
                      },
                      {
                          title: 'Word',
                          dataIndex: 'word',
                          key: 'word',
                          sorter: (a, b) => this.compareData(a.word, b.word),
                          render:  (text, record) => <a onClick={() => {
                            this.editWord(record)}
                          }>{record.word}</a>
                      },
                      {
                          title: 'Translation',
                          dataIndex: 'translation',
                          key: 'translation',
                          sorter: (a, b) => this.compareData(a.translation, b.translation)
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
                            <Button id="deleteWord" shape="circle" icon="delete" onClick={() => this.deleteWord(record.id)} />
                        )
                    }]}
            size="middle"
            pagination={false}/>;

        if(error) {
            return <div className="alert alert-danger">Error: {error.message}</div>
        }
*/
        return (
            <div>
                <h3>{selectedGroup.groupName} words:</h3>

                {/*<div id="wordToolBar">
                    <Search className="align-text-left"
                        placeholder="Search words"
                        style={{ width: 200 }}
                        onSearch={value => this.searchWords(value)}/>

                    <ButtonGroup className="align-right">
                        <Button onClick={() => window.print()} disabled={words && words.length === 0} icon="export">Print</Button>
                        <Button icon="plus-circle-o" onClick={() => this.newWord()}>New</Button>
                    </ButtonGroup>
                </div>
                <br/>

                {content}

                <WordForm />*/}
            </div>
        );
    }
}

export default Words;
