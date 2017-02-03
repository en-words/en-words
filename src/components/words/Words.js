import React, { Component } from 'react';

import { Table, Button } from 'antd';

import axios from 'axios';

import responsiveVoice from '../../libraries/responsivevoice.js';

import {REST_API_URL} from '../../common/AppSettings';

import './Words.css';

const ButtonGroup = Button.Group;

const playWord = (word) => {
    responsiveVoice.speak(word, 'UK English Male', {lang: "en-US"});
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
        sorter: 'true',
        render:  (text, record) => <a href="#">{record.word}</a>,
    }, {
        title: 'Translation',
        dataIndex: 'translation',
        key: 'translation',
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
    constructor(props) {
        super(props);

        this.state = {
            words: [],
            groupId: undefined,
            groupName: ''
        };
    }

    componentDidMount() {
        this.getWords(this.props.location.query.groupId);
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.groupId === nextProps.location.query.groupId) {
            return;
        }

        this.getWords(nextProps.location.query.groupId);
    }

    render() {
        return (
            <div>
                <h3>{this.state.groupName} words:</h3>

                <ButtonGroup id="wordsToolBar" className="align-right">
                    <Button onClick={() => window.print()} disabled={this.state.words.length === 0} icon="export">Print</Button>
                    <Button icon="plus-circle-o">New</Button>
                </ButtonGroup>
                <br/> <br/>

                <Table
                    rowKey={record => record.id}
                    dataSource={this.state.words}
                    columns={columns}
                    size="middle"
                    pagination={false} />
            </div>
        );
    }

    getWords(groupId) {
        axios.get(REST_API_URL + `words?groupId=${groupId}`)
            .then(res => this.setState({words: res.data, groupId: groupId}));

        axios.get(REST_API_URL + `groups/${groupId}`)
            .then(res => this.setState({groupName: res.data.group}));
    }
}

export default Words;
