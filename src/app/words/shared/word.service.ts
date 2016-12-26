import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";

import 'rxjs/add/operator/toPromise';

import {WordModel} from "./word.model"
import {AppSettings} from "../../common/app.settings";

@Injectable()
export class WordService {

  private headers = new Headers({'Content-Type': 'application/json'});
  words: WordModel[];

  constructor(private http: Http) {}

  getWords(groupId: number): Promise<WordModel[]> {

    return this.http.get(`${AppSettings.REST_API_URL}/words?groupId=${groupId}`)
      .toPromise()
      .then(response => response.json() as WordModel[])
      .catch(this.handleError);
  }

  getWord(wordId: number): Promise<WordModel> {

    return this.http.get(`${AppSettings.REST_API_URL}/words/${wordId}`)
      .toPromise()
      .then(response => response.json() as WordModel)
      .catch(this.handleError);
  }

  createWord(word: WordModel): Promise<WordModel> {
    return this.http.post(`${AppSettings.REST_API_URL}/words`, JSON.stringify(word), {headers: this.headers})
      .toPromise()
      .then(response => {
        return response.json() as WordModel
      })
      .catch(this.handleError);
  }

  updateWord(word: WordModel): Promise<WordModel> {
    return this.http.put(`${AppSettings.REST_API_URL}/words/${word.id}`, JSON.stringify(word), {headers: this.headers})
      .toPromise()
      .then(response => {
        return response.json() as WordModel
      })
      .catch(this.handleError);
  }

  deleteWord(wordId: number): Promise<WordModel> {
    return this.http.delete(`${AppSettings.REST_API_URL}/words/${wordId}`, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
