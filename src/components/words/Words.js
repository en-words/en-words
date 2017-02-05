import React, { Component } from 'react';
import { Table, Button } from 'antd';
import responsiveVoice from '../../libraries/responsivevoice.js';
import './Words.css';


const ButtonGroup = Button.Group;

const playWord = (word) => {
    responsiveVoice.speak(word, 'UK English Male', {lang: "en-US"});
};

const compareWord = (a, b) => {
    if (a.word.toLowerCase() === b.word.toLowerCase())
        return 0;

    if (a.word.toLowerCase() > b.word.toLowerCase())
        return 1;
    else
        return -1;
};

const compareTranslation = (a, b) => {
    if (a.translation.toLowerCase() === b.translation.toLowerCase())
        return 0;

    if (a.translation.toLowerCase() > b.translation.toLowerCase())
        return 1;
    else
        return -1;
};

const columns = [{
        title: '',
        dataIndex: 'play',
        key: 'play',
        width: '20px',
        render: (text, record) => (
            <Button id="playWord" icon="play-circle" onClick={() => playWord(record.word)} />
        )
    }, {
        title: 'Word',
        dataIndex: 'word',
        key: 'word',
        sorter: (a, b) => compareWord(a, b),
        render:  (text, record) => <a href="#">{record.word}</a>,
    }, {
        title: 'Translation',
        dataIndex: 'translation',
        key: 'translation',
        sorter: (a, b) => compareTranslation(a, b)
    }, {
        title: '',
        dataIndex: 'delete',
        key: 'delete',
        width: '20px',
        render: (text, record) => (
            <Button id="deleteWord" icon="delete" />
        )
    }];


class Words extends Component {

    componentDidMount() {
        this.props.fetchWords(this.props.location.query.groupId);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.selectedGroup.groupId === nextProps.selectedGroup.groupId) {
            return;
        }

        this.props.fetchWords(nextProps.location.query.groupId);
    }

    render() {
        const { words, error, loading } = this.props.wordList;
        const { group } = this.props.selectedGroup;

        if(error) {
            return <div className="alert alert-danger">Error: {error.message}</div>
        }

        return (
            <div>
                <h3>{group} words:</h3>

                <ButtonGroup id="wordsToolBar" className="align-right">
                    <Button onClick={() => window.print()} disabled={words && words.length === 0} icon="export">Print</Button>
                    <Button icon="plus-circle-o">New</Button>
                </ButtonGroup>
                <br/> <br/>

                <Table
                    rowKey={record => record.id}
                    dataSource={words}
                    columns={columns}
                    size="middle"
                    pagination={false}
                    loading={loading}/>
            </div>
        );
    }
}

export default Words;
