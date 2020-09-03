import { Component, OnInit } from '@angular/core';
import { FlickerResponse } from './models/flickerresponse';
import { ListingService } from '../listing.service';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css']
})

export class PhotoGalleryComponent implements OnInit {
  flickerResponse: FlickerResponse;
  constructor(private listingService: ListingService) { }
  ngOnInit() {
    this.listingService.getPhotos().subscribe( response => {
      this.flickerResponse = response;
    }, error => {
      console.log(error);
    });
  }
}