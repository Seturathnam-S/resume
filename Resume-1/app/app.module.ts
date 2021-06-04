import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { StepperComponent } from './stepper/stepper.component';

import { HttpClientModule ,HTTP_INTERCEPTORS} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {RouterModule,Routes} from '@angular/router';
import { UserNavComponent } from './user-nav/user-nav.component';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { UserService } from './user.service';
import { MatNativeDateModule } from '@angular/material/core';

import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { UserViewComponent } from './user-view/user-view.component';



const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'resume', component: StepperComponent},
  {path: 'login', component: SignInComponent},
  {path: 'user', component: UserNavComponent,canActivate:[AuthGuard]},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
  
  
]

@NgModule({
  declarations: [
    AppComponent,
    StepperComponent,
    LoginComponent,
    RegisterComponent,
    UserNavComponent,
    UserDialogComponent,
    SignInComponent,
    UserViewComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatDialogModule,
    MatTableModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatTabsModule,
    HttpClientModule,
    MatStepperModule,
    MatDatepickerModule,
    MatRadioModule,
    MatSelectModule,
    MatCheckboxModule,
    MatNativeDateModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },AuthGuard,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
