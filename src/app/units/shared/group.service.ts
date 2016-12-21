import {Injectable} from "@angular/core";
import {UnitModel} from "./unit.model";
import {Http} from "@angular/http";

import 'rxjs/add/operator/toPromise';
import {AppSettings} from "../../common/app.settings";

@Injectable()
export class GroupService {

  constructor(private http: Http) {}

  getGroups(): Promise<UnitModel[]> {

    return this.http.get(`${AppSettings.REST_API_URL}/groups`)
      .toPromise()
      .then(response => response.json() as UnitModel[])
      .catch(this.handleError);
  }

  getGroup(groupId: number): Promise<UnitModel> {

    return this.http.get(`${AppSettings.REST_API_URL}/groups/${groupId}`)
      .toPromise()
      .then(response => response.json() as UnitModel)
      .catch(this.handleError);
  }

  saveGroup(group: UnitModel): Promise<UnitModel> {
    console.log('save: ' + JSON.stringify(group));
    return this.http.post(`${AppSettings.REST_API_URL}/groups`, group)
      .toPromise()
      .then(response => {
        console.log('response: ' + response.json());
        return response.json() as UnitModel
      })
      .catch(this.handleError);
  }

  deleteGroup(groupId: number) {

    this.http.delete(`${AppSettings.REST_API_URL}/groups/${groupId}`);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
