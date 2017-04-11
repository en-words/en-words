import React from 'react';
import { Button, Input } from 'antd';
import '../WordList/WordList.css';

const ButtonGroup = Button.Group;
const Search = Input.Search;

class WordToolBar extends React.Component {

    searchWords = (searchText) => {
      this.props.searchWords(this.props.selectedGroup.groupId, searchText);
    };


    render() {

        const { onSearchWord, onNewWord, words } = this.props;

        return (

            <div id="wordToolBar">
                <Search className="align-text-left"
                        placeholder="Search words"
                        style={{ width: 200 }}
                        onSearch={value => onSearchWord(value)}/>

                <ButtonGroup className="align-right">
                    <Button onClick={() => window.print()} disabled={words && words.length === 0} icon="export">Print</Button>
                    <Button icon="plus-circle-o" onClick={() => onNewWord()}>New</Button>
                </ButtonGroup>
            </div>
        );
    }
}

export default WordToolBar;
