import { Component, OnInit } from '@angular/core';
import { ListingService, ScoreBat } from '../listing.service';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css']
})

export class PhotoGalleryComponent implements OnInit {
 Data: ScoreBat[];  
  DataResponse: ScoreBat[];
  constructor(private listingService: ListingService) { }
  ngOnInit() {
    this.listingService.getUsers().subscribe((res) => {
          this.DataResponse = res;
        }, error => {
          console.log(error);
        })
  }
}