import { Routes } from '@angular/router';
import { StartscreenLoginComponent } from './startscreen-login/startscreen-login.component';
import { DataprotectionComponent } from './dataprotection/dataprotection.component';

export const routes: Routes = [
    {path: '', component: StartscreenLoginComponent},
    {path: 'dataprotection', component: DataprotectionComponent}
];
