import { Pipe, PipeTransform } from '@angular/core';
import {WordModel} from "./word.model";
import {FirebaseListObservable} from "angularfire2";

@Pipe({name: 'wordFilter'})
export class WordFilterPipe implements PipeTransform {

  transform(words: FirebaseListObservable<WordModel[]>, filter: string) {
      words.subscribe(wordlist =>
        wordlist.filter(word =>
          word.word == '' ||
          word.word.indexOf(filter) > -1 ||
          word.translation.indexOf(filter) > -1)
      );
  }

}
