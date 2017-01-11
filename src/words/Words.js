import React, { Component } from 'react';
import axios from 'axios';

import responsiveVoice from '../libraries/responsivevoice.js';

import {AppSettings} from '../common/AppSettings'

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
                            <button type="button" id="playWord" className="btn btn-default btn-xs align-right" onClick={this.handleClick}>
                                <span className="glyphicon glyphicon-play" />
                            </button>
                        </td>
                        <td>
                            <a>{word.word}</a>
                        </td>
                        <td>
                            {word.translation}
                        </td>
                        <td></td>
                    </tr>)
                }
                </tbody>
            </table>
        );
    }

    getWords(groupId) {
        axios.get(AppSettings.REST_API_URL + `words?groupId=${groupId}`)
            .then(res => this.setState({words: res.data, groupId: groupId}));
    }

    handleClick(e) {
        e.preventDefault();
        responsiveVoice.speak('car', 'UK English Male', {lang: "en-US"});
        console.log('The link was clicked.');
    }

    playWord(word) {
        responsiveVoice.speak(word, 'UK English Male', {lang: "en-US"});
    }
}

export default Words;
