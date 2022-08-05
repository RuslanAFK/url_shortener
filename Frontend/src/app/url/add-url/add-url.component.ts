import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-add-url',
  templateUrl: './add-url.component.html',
  styleUrls: ['./add-url.component.css']
})
export class AddUrlComponent implements OnInit {

  constructor(private service: SharedService, private app: AppComponent) { }

  FullUrl: string = "";
  ShortUrl: string = "";

  ngOnInit(): void {

  }

  addUrl(){
    var val = {
      FullUrl: this.FullUrl,
      ShortUrl: this.ShortUrl,
      CreatedBy: this.app.UserEmail,
      CreatedDate: "08-08-2020",
    }
    this.service.addUrl(val).subscribe(res =>
      alert(res.toString()))
  }


}
