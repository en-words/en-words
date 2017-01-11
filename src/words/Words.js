import React, { Component } from 'react';
import axios from 'axios';

import responsiveVoice from '../libraries/responsivevoice.js';

import {REST_API_URL} from '../common/AppSettings';

import { Button, ButtonToolbar, Glyphicon } from 'react-bootstrap';

import './Words.css';

class Words extends Component {
    constructor(props) {
        super(props);

        this.state = {
            words: [],
            groupId: undefined
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
                <h3>Words:</h3>

                <ButtonToolbar id="wordsToolBar" className="align-right">
                    <Button bsSize="small" onClick={() => window.print()}>
                        <Glyphicon glyph="print"/> Print
                    </Button>
                    <Button bsSize="small">
                        <Glyphicon glyph="plus"/> New
                    </Button>
                </ButtonToolbar>

                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Word</th>
                            <th>Translation</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    { this.state.words.map(word =>
                        <tr key={word.id}>
                            <td width="20px">
                                <Button id="playWord" bsSize="xsmall" className="align-right" onClick={() => this.playWord(word.word)}>
                                    <Glyphicon glyph="play"/>
                                </Button>
                            </td>
                            <td>
                                <a>{word.word}</a>
                            </td>
                            <td>
                                {word.translation}
                            </td>
                            <td>
                                <Button id="removeWord" bsSize="xsmall" className="align-right">
                                    <Glyphicon glyph="trash"/>
                                </Button>
                            </td>
                        </tr>)
                    }
                    </tbody>
                </table>
            </div>
        );
    }

    getWords(groupId) {
        axios.get(REST_API_URL + `words?groupId=${groupId}`)
            .then(res => this.setState({words: res.data, groupId: groupId}));
    }

    playWord(word) {
        responsiveVoice.speak(word, 'UK English Male', {lang: "en-US"});
    }
}

export default Words;
