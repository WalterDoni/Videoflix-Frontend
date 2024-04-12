import { Routes } from '@angular/router';
import { StartscreenLoginComponent } from './startscreen-login/startscreen-login.component';
import { DataprotectionComponent } from './dataprotection/dataprotection.component';
import { ImprintComponent } from './imprint/imprint.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
    {path: '', component: StartscreenLoginComponent},
    {path: 'dataprotection', component: DataprotectionComponent},
    {path: 'imprint', component: ImprintComponent},
    {path: 'signup', component: SignupComponent},
];
