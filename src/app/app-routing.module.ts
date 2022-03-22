import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserInfoComponent } from './user-info/user-info.component';
import { UsersPostsComponent } from './users-posts/users-posts.component';
import { UsersComponent } from './users/users.component';

//როუტში მიწერია ის რომ როდესაც შევალთ საიტზე, პირდაპირ გადაამისამართოს users path ზე, რომელიც პირველი გვერდია
//დანარჩენი ორი user-info და user-posts არის რომელიც იღებ User-ის Id-ის რადგან მარტივი და გასაგები იყოს
const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: UsersComponent },
  { path: 'users-info/:id', component: UserInfoComponent },
  { path: 'users-posts/:id', component: UsersPostsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
