import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-startscreen-login',
  standalone: true,
  imports: [],
  templateUrl: './startscreen-login.component.html',
  styleUrl: './startscreen-login.component.scss'
})
export class StartscreenLoginComponent {

constructor(private router: Router){

}


//--Navigation--//
showDataprotection(){
  this.router.navigateByUrl('dataprotection');
} 

showImprint(){
  this.router.navigateByUrl('imprint');
}


showSignup(){
  this.router.navigateByUrl('signup');
}

}
