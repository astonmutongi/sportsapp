import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ListingsComponent } from './listings/listings.component';
import { BidsComponent } from './bids/bids.component';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [ 
    {path: 'profile' , component: ProfileComponent},
    {path: 'listing' , component: ListingsComponent},
    {path: 'bids' , component: BidsComponent},
    {path: 'chat' , component: ChatComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }