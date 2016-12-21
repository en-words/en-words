import {Injectable} from "@angular/core";
import {WordModel} from "./word.model";
import {AngularFire} from "angularfire2";

@Injectable()
export class WordService {

  words: Array<WordModel>;

  constructor(private af: AngularFire) {}

  getWords(unit: string): WordModel[] {

    this.af.database.list('/words', {
      query: {
        equalTo: unit
      }
    });

    return this.words;
  }


}
