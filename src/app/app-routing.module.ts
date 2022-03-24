import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { ProductsComponent } from './products/products.component';

import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  { path: '',  redirectTo: '/home', pathMatch: 'full' },
  { path: 'about', component: AboutMeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'home', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'resume', component: ResumeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }