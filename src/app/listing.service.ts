import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
export interface MediaUrl {
    m: string;
}
export interface Item {
    title: string;
    link: string;
    media: MediaUrl;
    date_taken: Date;
    description: string;
    published: Date;
    author: string;
    author_id: string;
    tags: string;
}
export interface FlickerResponse {
    title: string;
    link: string;
    description: string;
    modified: Date;
    generator: string;
    items: Item[];
}

@Injectable({
  providedIn: 'root'
})
export class ListingService {
  flickerUrl = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1';
  constructor(private http: HttpClient) { }
  getPhotos(): Observable<FlickerResponse> {
    return this.http.get<FlickerResponse>(this.flickerUrl);
  }
}
