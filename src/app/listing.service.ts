import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
export interface Video {
    title: string;
    embed: string;
}
export interface Competetion {
    name: string;
    id: string;
    medurlia: string;
}
/*export interface FlickerResponse {
    title: string;
    link: string;
    description: string;
    modified: Date;
    generator: string;
    items: Item[];
}*/

export interface ScoreBat {
  title: string;
  embed:string;
  url: string;
  thumbnail:string;
  date: string;
  competition: string;
  content: string;
  embedUrl: string;  
  
}

@Injectable({
  providedIn: 'root'
})
export class ListingService {
  api: string = "https://www.scorebat.com/video-api/v1/";

  constructor(private http: HttpClient) { }

  getUsers(): Observable<ScoreBat[]> {
    return this.http.get<ScoreBat[]>(this.api)
  }
}
