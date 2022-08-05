import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service : SharedService, private app: AppComponent) { }

  email: string = "";
  password: string = "";
  RememberMe: boolean = false;


  ngOnInit(): void {
  }

  onSubmitClicked(){
    var element = <HTMLInputElement> document.getElementById("exampleCheck1");
    this.RememberMe = element.checked;
    var user = {
      Email: this.email,
      Password:  this.password,
      RememberMe: this.RememberMe,
    }
    this.service.login(user).subscribe((data: any) => {
      alert(data.Message);
      if(data.Success){
        this.app.refreshUser(user.Email);
      }
    }
    )
  }

}
