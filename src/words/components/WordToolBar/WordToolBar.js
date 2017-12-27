import React from 'react';
import PropTypes from 'prop-types';
import { Button, Input } from 'antd';

import './WordToolBar.css';

WordToolBar.propTypes = {
    words: PropTypes.array,
    onSearchWord: PropTypes.func.isRequired,
    onNewWord: PropTypes.func.isRequired
};

function WordToolBar({words = [], onSearchWord, onNewWord}) {

    return (
        <div id="wordToolBar">
            <Input.Search
                className="align-text-left"
                placeholder="Search words"
                style={{ width: 200 }}
                onSearch={onSearchWord}/>

            <Button.Group className="align-right">
                <Button onClick={() => window.print()} disabled={words && words.length === 0} icon="export">Print</Button>
                <Button icon="plus-circle-o" onClick={onNewWord}>New</Button>
            </Button.Group>
        </div>
    );
}

export default WordToolBar;
