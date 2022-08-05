import { Component } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private service: SharedService){

  }
  title = 'Frontend';

  UserEmail: string = "";

  registerHidden = false;
  loginHidden = false;
  logoffHidden =  true;

  refreshUser(email: string){
    this.UserEmail = email;
    if(email === ""){
      this.registerHidden = false;
      this.loginHidden = false;
      this.logoffHidden =  true;
    }else{
      this.registerHidden = true;
      this.loginHidden = true;
      this.logoffHidden =  false;
    }
  }

  onLogooff(){
    if(confirm("Do you want to log off?")){
      this.service.logoff().subscribe((data: any) => {
        alert(data.Message);
      })
      this.refreshUser("");
    }
  }

}
