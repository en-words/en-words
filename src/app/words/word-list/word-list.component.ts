import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {WordModel} from "../shared/word.model";
import {WordComponent} from "../word/word.component";
import {WordService} from "../shared/word.service";
import {GroupService} from "../../groups/shared/group.service";

@Component({
  selector: 'word-list',
  templateUrl: './word-list.component.html',
  styleUrls: ['./word-list.component.css']
})
export class WordListComponent implements OnInit {

  @ViewChild(WordComponent) wordInfo: WordComponent;
  words: WordModel[];
  groupName: string;
  group: number;


  constructor(private wordService: WordService, private groupService: GroupService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.group = params['id'];
        this.wordService.getWords(this.group).then(words => this.words = words);
        this.groupService.getGroup(this.group).then(group => this.groupName = group.group);
      }
    );
  }

  addWord() {
    this.wordInfo.newWord();
  }

  deleteWord(word: WordModel) {
    if(confirm(`Do you want to delete the word?`)) {
      this.wordService
        .deleteWord(word.id)
        .then(() => {
          this.words.splice(this.words.indexOf(word), 1)
        });
    }
  }

  editWord(word: WordModel) {
    let wordData: WordModel;
    wordData = JSON.parse(JSON.stringify(word));
    wordData.id = word.id;
    this.wordInfo.editWord(wordData);
  }

  onSubmit(word: WordModel) {
    if(word.id) {
      // update word
      this.wordService
        .updateWord(word)
        .then(word => {
          for (let item in this.words) {
            if (this.words[item].id === word.id) {
              this.words[item].translation = word.translation;
              this.words[item].word = word.word;
              this.words[item].comments = word.comments;
            }
          }
        });
    } else {
      // create a new word
      this.wordService
        .createWord(word)
        .then(word => this.words.push(word));
    }
  }

  playWord(word: string) {
    responsiveVoice.speak(word, 'UK English Male', {lang: "en-US"});
  }
}
