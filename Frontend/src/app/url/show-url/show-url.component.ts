import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-url',
  templateUrl: './show-url.component.html',
  styleUrls: ['./show-url.component.css']
})
export class ShowUrlComponent implements OnInit {

  constructor(private service: SharedService, private app: AppComponent) { }

  UrlList : any = [];
  ModalTitle : string = "";
  ActivateAddButton : boolean = false;
  url : any;
  addModalDisplay = "none";
  detailsModalDisplay = "none";

  isAddHidden = (this.app.UserEmail === "");

  ngOnInit(): void {
    this.refreshUrlList();
  }


  addClick(){
    this.addModalDisplay = "block";
    this.url = {
      Id: 0,
      FullUrl: "",
      ShortUrl: "",
      CreatedBy: 0,
      CreatedDate: Date.now().toString(),
    }
    this.ModalTitle = "Add Url";
    this.ActivateAddButton = true;
  }

  closeClick(){
    this.addModalDisplay = "none";
    this.detailsModalDisplay = "none";
    this.ActivateAddButton = false;
    this.refreshUrlList();
  }

  detailsClick(item: any){
    this.url = item;
    this.detailsModalDisplay = "block";
    this.ModalTitle = "Details of Url";
    this.ActivateAddButton = true;
  }

  refreshUrlList(){
    this.service.getUrlList().subscribe(data =>
      this.UrlList=data
      );
  }

  deleteClick(item: any){
    if(confirm("Are you sure?")){
      this.service.deleteUrl(item.Id).subscribe(data =>
        console.log(data.toString()))
        this.refreshUrlList();
    }
  }



}
