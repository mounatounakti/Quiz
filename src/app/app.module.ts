import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizListComponent } from './list-quiz/list-quiz.component';
import { QuizComponent } from './game/game.component';
import { CategoriesComponent } from './categories/categories.component';
import { HttpClientModule } from '@angular/common/http';
import { AddQuizComponent } from './add-quiz/add-quiz.component';
import { SingUpComponent } from './Login/sing-up/sing-up.component';
import { SingInComponent } from './Login/sing-in/sing-in.component';
import { ForgetPasswordComponent } from './Login/forget-password/forget-password.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NavbarComponent } from './Bars/navbar/navbar.component';
import { SidebarComponent } from './Bars/sidebar/sidebar.component';
import { PlayerProfileComponent } from './Profile/player-profile/player-profile.component';
import { CreatorProfileComponent } from './Profile/creator-profile/creator-profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { FilterPipe } from './categories/Pipes/filter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    QuizListComponent,
    QuizComponent,
    CategoriesComponent,
    AddQuizComponent,
    SingUpComponent,
    SingInComponent,
    ForgetPasswordComponent,
    NavbarComponent,
    SidebarComponent,
    PlayerProfileComponent,
    CreatorProfileComponent,
    DashboardComponent,
    LeaderboardComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
