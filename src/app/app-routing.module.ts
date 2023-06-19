import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizListComponent} from './list-quiz/list-quiz.component';
import { QuizComponent } from './game/game.component';
import { CategoriesComponent } from './categories/categories.component';
import { AddQuizComponent } from './add-quiz/add-quiz.component';
import { SingUpComponent } from './Login/sing-up/sing-up.component';
import { SingInComponent } from './Login/sing-in/sing-in.component';
import { ForgetPasswordComponent } from './Login/forget-password/forget-password.component';
import { SidebarComponent } from './Bars/sidebar/sidebar.component';
import { NavbarComponent } from './Bars/navbar/navbar.component';
import { PlayerProfileComponent } from './Profile/player-profile/player-profile.component';
import { CreatorProfileComponent } from './Profile/creator-profile/creator-profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';

const routes: Routes = [
  {path : "" , component:SingInComponent},
  {path : "Categories" , component:CategoriesComponent},
  {path : "listQuiz" , component:QuizListComponent},
  {path : "Game/:id" , component:QuizComponent},
  {path : "AddQuiz" , component:AddQuizComponent},
  {path : "SignUp" , component:SingUpComponent},
  {path : "SignIn" , component:SingInComponent},
  {path : "ForgetPassword" , component:ForgetPasswordComponent},
  {path : "SideBar" , component:SidebarComponent},
  {path : "NavBar" , component:NavbarComponent},
  {path : "PlayerProfile" , component:PlayerProfileComponent},
  {path : "CreatorProfile" , component:CreatorProfileComponent},
  {path : "Dashboard" , component:DashboardComponent},
  {path : "Leaderboard" , component:LeaderboardComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
