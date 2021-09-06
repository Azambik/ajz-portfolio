import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path: "",  component: HomeComponent, pathMatch: "full"},
  {path: 'projects', component: ProjectsComponent },
  {path: 'resume', component: ResumeComponent},
  {path: 'aboutMe', component: AboutMeComponent},
  {path: "contact", component: ContactComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }