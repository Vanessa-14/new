import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatToolbarModule } from  '@angular/material/toolbar';
import { MatIconModule } from  '@angular/material/icon';
import { MatSidenavModule } from  '@angular/material/sidenav';
import { MatListModule } from  '@angular/material/list';
import { MatButtonModule } from  '@angular/material/button';
import {MatInputModule} from '@angular/material/input'; 
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { from } from 'rxjs';
import { HomeComponent } from './components/home/home.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { MyFollowUpComponent } from './components/my-follow-up/my-follow-up.component';
import { GeneralFollowComponent } from './components/general-follow/general-follow.component';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';


const appRoutes: Routes = [
  //Roting loggin with another pages
  { path: '', component: LoginComponent },
  { path: 'users', component: UsersComponent },
  {path: 'main', component: MainComponent,
  children: [
    { path: 'home', component: HomeComponent },
    { path: 'alerts', component: AlertsComponent },
    { path: 'MyFollow', component: MyFollowUpComponent },
    { path: 'GeneralFollow', component: GeneralFollowComponent }
  ]}


];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HomeComponent,
    AlertsComponent,
    MyFollowUpComponent,
    GeneralFollowComponent,
    MainComponent,
    LoginComponent,

  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
