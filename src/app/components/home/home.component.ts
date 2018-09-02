import { Component, OnInit } from '@angular/core';
import { TmdbApiService } from './../../services/tmdb-api.service';
import { AppConfig } from './../../config/config.constant';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[TmdbApiService]
})
export class HomeComponent implements OnInit {
public popularData: any=[];
public movieId:number = 0;
public movieUrl=AppConfig.baseUrl;
public movieSearch : any;

constructor(private tmdbApiService : TmdbApiService) { }
 ngOnInit()
  {
     this.getInfo();
  }
 getInfo()
  {
    this.tmdbApiService.getPopular().subscribe(data=>{
    this.popularData=data.results;
        },(error:any)=>{
          console.log(error)
        })
  }
//_____________getting data from search word via search button
search() {
 this.tmdbApiService.getSearch(this.movieSearch).subscribe(data=>{
// ____________movieSearch is user search word
  this.popularData=data.results;
    },(error:any)=>{
    console.log(error)
    })
  }
//_____________getting data from search word via search box
keySearch() {
 this.tmdbApiService.getSearch(this.movieSearch).subscribe(data=>{
 this.popularData=data.results;
    },(error:any)=>{
    console.log(error)
    })
  }
//_____________counting your selected movies
count(){
  this.movieId=this.movieId+1;
  console.log(this.movieId);
  }
}
