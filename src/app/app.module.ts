import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatSidenavModule, MatListModule, MatButtonModule, MatIconModule } from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ListingsComponent } from './listings/listings.component';
import { BidsComponent } from './bids/bids.component';
import { ChatComponent } from './chat/chat.component';
import {MatTabsModule} from '@angular/material';
import { ListingService } from './listing.service';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ListingsComponent,
    BidsComponent,
    ChatComponent,
    PhotoGalleryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,    
    AppRoutingModule,
    MatTabsModule,
    HttpClientModule,
    HttpModule,
  ],
  providers: [ListingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
