import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTeamsComponent } from './list-teams/list-teams.component';
import { ListPostsComponent } from './list-posts/list-posts.component';


const routes: Routes = [
  {
    path: "",
    component: ListTeamsComponent
  },
  {
    path: "ListTeams",
    component: ListTeamsComponent
  },
  {
    path: "ListPosts",
    component: ListPostsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }