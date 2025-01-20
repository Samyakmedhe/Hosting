import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { ChildComponent } from './child/child.component';
import { FamilyComponent } from './family/family.component';
const routes: Routes = [
  { path: '', component: HomeComponent },  // Default route
  { path: 'gallery', component: GalleryComponent },  // Route for Gallery
  { path : 'Child', component : ChildComponent },
  {path :'Family', component : FamilyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
