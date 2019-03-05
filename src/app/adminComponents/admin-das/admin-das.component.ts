import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-das',
  templateUrl: './admin-das.component.html',
  styleUrls: ['./admin-das.component.css']
})
export class AdminDasComponent implements OnInit {

  public charityResult: any[];
 
  constructor(public service: DataService, public router: Router) { }

  ngOnInit() {
    this.getCharitydetails();
  }

  getCharitydetails() {
    this.service.getCharitydetails().subscribe((res:any) => {
      console.log(res);
      this.charityResult = res.result.paginatedItems;
    })
  }

  DisableCharity(_id) {
    console.log(_id);
    var data = {"approved" : false, "id":_id};
    this.service.desableCharity(data).subscribe((res) => {
      console.log(res);
      if(res) {
        alert('do you want to disable the charity');
        this.refresh();
      } else {
        alert('cannot be disabled')
      }
    })
  }

  ApproveCharity(_id){
    console.log(_id);
    var data={"approved": true,"id":_id};
    this.service.approveCharity(data).subscribe((res)=>{
      console.log(res);
      if(res){
        alert("Charity Approved")
        this.refresh();
      }
      else{
        alert("Could not approve")
      }
    })
  }

  refresh(){
    window.location.reload();
  }
}
