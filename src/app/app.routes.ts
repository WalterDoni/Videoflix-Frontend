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

export const routes: Routes = [
    {path: '', component: StartscreenLoginComponent},
    {path: 'dataprotection', component: DataprotectionComponent},
    {path: 'imprint', component: ImprintComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'browse', component: MainpageComponent},
    {path: 'upload', component: UploadComponent},
    {path: 'series', component: SeriesComponent},
    {path: 'movies', component: MovieComponent},
    {path: 'documentations', component: DocumentationComponent},
    {path:'contact', component: ContactFormularComponent}
];
