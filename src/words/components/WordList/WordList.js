import React, { PropTypes } from 'react';
import { Table, Button, Popover } from 'antd';

import './WordList.css';

WordList.propTypes = {
    words: PropTypes.array,
    onPlayWord: PropTypes.func.isRequired,
    onUpdateWord: PropTypes.func.isRequired,
    onDeleteWord: PropTypes.func.isRequired
};

function WordList({words = [], onPlayWord, onUpdateWord, onDeleteWord}) {

    return (
        <Table
            rowKey={record => record.id}
            dataSource={words}
            columns={[{
                    title: '',
                    dataIndex: 'play',
                    key: 'play',
                    width: '20px',
                    render: (text, record) => (
                        <Button id="playWord" shape="circle" icon="play-circle" onClick={() => onPlayWord(record.word)} />
                    )
                },
                {
                    title: 'Word',
                    dataIndex: 'word',
                    key: 'word',
                    //sorter: (a, b) => this.compareData(a.word, b.word),
                    render:  (text, record) =>
                        <a onClick={() => onUpdateWord(record)}>{record.word}</a>
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
                        <Button id="deleteWord" shape="circle" icon="delete" onClick={() => onDeleteWord(record.id)} />
                    )
                }]}
            size="middle"
            pagination={false}/>
    );
}

export default WordList;
