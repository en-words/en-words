import {Component, OnInit, ViewChild, Output, EventEmitter, Input} from '@angular/core';

import {WordModel} from "../shared/word.model";
import {Modal} from "ng2-modal";

@Component({
  selector: 'word-info',
  templateUrl: './word.component.html'
})
export class WordComponent implements OnInit {

  word: WordModel;
  wordTitle: string;
  @ViewChild(Modal) wordModal: Modal;
  @Output() onSubmit = new EventEmitter<WordModel>();
  @Input() groupId: number;

  ngOnInit() {
    this.word = new WordModel();
  }

  newWord() {
    this.wordTitle = 'New word';
    this.word = new WordModel();
    this.word.groupId = this.groupId;
    this.wordModal.open();
  }

  editWord(word: WordModel) {
    this.wordTitle = 'Edit word';
    this.word = word;
    this.wordModal.open();
  }

  submit() {
    this.onSubmit.emit(this.word);
    this.wordModal.close();
  }

}
