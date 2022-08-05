import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private service: SharedService, private app: AppComponent) { }

  email: string = "";
  password: string = "";
  confirmPassword: string = "";
  isAdmin: boolean = false;


  ngOnInit(): void {
  }

  onSubmitClicked(){
    var element = <HTMLInputElement> document.getElementById("exampleCheck1");
    this.isAdmin = element.checked;
    var user = {
      Email: this.email,
      Password:  this.password,
      ConfirmPassword: this.confirmPassword,
      IsAdmin: this.isAdmin,
    }
    this.service.register(user).subscribe((data: any) => {
      alert(data.Message);
      if(data.Success){
        this.app.refreshUser(user.Email);
      }
  })
  }

}
