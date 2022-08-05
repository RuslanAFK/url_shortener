import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-details-url',
  templateUrl: './details-url.component.html',
  styleUrls: ['./details-url.component.css']
})
export class DetailsUrlComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() itemId: any;
  url : any;

  ngOnInit(): void {
    this.service.getUrl(this.itemId).subscribe((data: any) => {
      if(data.Success){
        this.url = data.Data;
      }else{
        alert(data.Data);
      }
    })
  }

  DateFormat(jsonDate: any){
    var date = new Date(parseInt(jsonDate.substr(6)));
    return date.toDateString();
  }

}
