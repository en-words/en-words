import {Component, OnInit, ViewChild, Output, EventEmitter, Input} from '@angular/core';

import {WordModal} from "../shared/word.modal";
import {Modal} from "ng2-modal";

@Component({
  selector: 'word-info',
  templateUrl: './word.component.html'
})
export class WordComponent implements OnInit {

  word: WordModal;
  wordTitle: string;
  @ViewChild(Modal) wordModal: Modal;
  @Output() onSubmit = new EventEmitter<WordModal>();
  @Input() unit: string;

  ngOnInit() {
    this.word = new WordModal();
  }

  newWord() {
    this.wordTitle = 'New word';
    this.word = new WordModal();
    this.word.unit = this.unit;
    this.wordModal.open();
  }

  submit() {
    this.onSubmit.emit(this.word);
    this.wordModal.close();
  }

}
