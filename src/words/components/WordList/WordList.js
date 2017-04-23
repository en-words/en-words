import React, { PropTypes } from 'react';
import { Table, Button, Popover } from 'antd';

import './WordList.css';

WordList.propTypes = {
    words: PropTypes.array,
    onPlayWord: PropTypes.func.isRequired,
    onDeleteWord: PropTypes.func.isRequired,
    onEditWord: PropTypes.func.isRequired
};

function WordList({words = [], onPlayWord, onDeleteWord, onEditWord}) {

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
                    sorter: (a, b) => a.word.localeCompare(b.word, undefined, {numeric: true, sensitivity: 'base'}),
                    render:  (text, record) =>
                        <a onClick={() => onEditWord(record)}>{record.word}</a>
                },
                {
                    title: 'Translation',
                    dataIndex: 'translation',
                    key: 'translation',
                    sorter: (a, b) => a.translation.localeCompare(b.translation, undefined, {numeric: true, sensitivity: 'base'})
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
