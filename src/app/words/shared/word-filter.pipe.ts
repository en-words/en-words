import { Pipe, PipeTransform } from '@angular/core';
import {WordModel} from "./word.model";

@Pipe({name: 'wordFilter'})
export class WordFilterPipe implements PipeTransform {

  transform(words: WordModel[], filter: string) {
      words.filter(word =>
          word.word == '' ||
          word.word.indexOf(filter) > -1 ||
          word.translation.indexOf(filter) > -1);
  }

}
