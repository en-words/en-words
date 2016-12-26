import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";

import 'rxjs/add/operator/toPromise';

import {GroupModel} from "./group.model";
import {AppSettings} from "../../common/app.settings";

@Injectable()
export class GroupService {
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {}

  getGroups(): Promise<GroupModel[]> {

    return this.http.get(`${AppSettings.REST_API_URL}/groups`)
      .toPromise()
      .then(response => response.json() as GroupModel[])
      .catch(this.handleError);
  }

  getGroup(groupId: number): Promise<GroupModel> {

    return this.http.get(`${AppSettings.REST_API_URL}/groups/${groupId}`)
      .toPromise()
      .then(response => response.json() as GroupModel)
      .catch(this.handleError);
  }

  createGroup(group: GroupModel): Promise<GroupModel> {
    return this.http.post(`${AppSettings.REST_API_URL}/groups`, JSON.stringify(group), {headers: this.headers})
      .toPromise()
      .then(response => {
        return response.json() as GroupModel
      })
      .catch(this.handleError);
  }

  updateGroup(group: GroupModel): Promise<GroupModel> {
    return this.http.put(`${AppSettings.REST_API_URL}/groups/${group.groupId}`, JSON.stringify(group), {headers: this.headers})
      .toPromise()
      .then(response => {
        return response.json() as GroupModel
      })
      .catch(this.handleError);
  }

  deleteGroup(groupId: number): Promise<GroupModel> {
    console.log("Delete group: " + groupId);
    return this.http.delete(`${AppSettings.REST_API_URL}/groups/${groupId}`, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
