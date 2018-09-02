import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AppConfig } from './../config/config.constant';
import 'rxjs/add/operator/map';
//__________________TmdbApiService for getting data from Api
@Injectable()
export class TmdbApiService {
private popularURL=AppConfig.movie_api;
data:any={};
constructor(private http: Http) { }
//__________________getting all movies list
getPopular(){
     return this.http.get(this.popularURL)
     .map(data => data.json(),
     (error: any)=>this.handleError(error));
   }
//__________________getting movies list accourding to user word
getSearch(movieName: any){
     return this.http.get(AppConfig.search_api+movieName)
     .map(data => data.json(),
     (error: any)=>this.handleError(error));
   }
     private handleError(error: Response){
     return Observable.throw(error.statusText);
   }
}
