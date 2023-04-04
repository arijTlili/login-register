import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  reg_email:string="";
  reg_password:string='';
  reg_confirm_password:string='';
  reg_first_name:string='';
  reg_last_name:string='';
  reg_user_name:string='';
  register(){}
}
