import { Component, OnInit } from '@angular/core';
import { ServerService } from './server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
 {
  title = 'angularclient';
  constructor(private service : ServerService)
  {}

  ngOnInit()
  {
    this.getBathesfromAPI()
  }

  getBathesfromAPI()
  {
    this.service.getBatches().subscribe((Response)=>{
    console.log("Data from server : ",Response);
    
    });
  }
}
