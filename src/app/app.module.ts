import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { RouterModule , Routes} from '@angular/router';
import { ChildComponent } from './child/child.component';
import { FamilyComponent } from './family/family.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent ,
    GalleryComponent,
    ChildComponent,
    FamilyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
