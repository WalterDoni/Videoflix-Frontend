import { Routes } from '@angular/router';
import { StartscreenLoginComponent } from './startscreen-login/startscreen-login.component';
import { DataprotectionComponent } from './dataprotection/dataprotection.component';
import { ImprintComponent } from './imprint/imprint.component';
import { SignupComponent } from './signup/signup.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { UploadComponent } from './upload/upload.component';
import { ContactFormularComponent } from './contact-formular/contact-formular.component';
import { SeriesComponent } from './series/series.component';
import { MovieComponent } from './movie/movie.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';


export const routes: Routes = [
  { path: '', component: StartscreenLoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'browse/:userId', component: MainpageComponent },
  { path: 'upload/:userId', component: UploadComponent },
  { path: 'series/:userId', component: SeriesComponent },
  { path: 'movies/:userId', component: MovieComponent },
  { path: 'documentations/:userId', component: DocumentationComponent },
  { path: 'dataprotection', component: DataprotectionComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'contact/:userId', component: ContactFormularComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'reset-password/:uid/:token', component: ResetPasswordComponent },
];
