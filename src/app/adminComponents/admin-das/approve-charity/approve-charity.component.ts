import { Component, OnInit, Optional} from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import {MatPaginator, MatTableDataSource} from '@angular/material';



@Component({
  selector: 'app-approve-charity',
  templateUrl: './approve-charity.component.html',
  styleUrls: ['./approve-charity.component.css']
})
export class ApproveCharityComponent implements OnInit {

  public charityResult: any[];
  public page;
  public approved: any=[];
  public data: any=[];
  spinner: boolean;

  dataSource = new MatTableDataSource

  constructor(  public service: DataService ) { }

  ngOnInit() {
    this.getCharitydetails();
  }

  

  getCharitydetails() {
    this.spinner = true;
    this.service.getCharitydetails(this.page).subscribe((res:any) => {
      this.spinner = false;
       this.charityResult = res.result.paginatedItems;
    })
  }

  ApproveCharity(_id){
    console.log(_id);
    var data={"approved": 'approved',"id":_id};
    this.service.approveCharity(data).subscribe((res)=>{
      if(res){
        alert("Charity Approved")
        this.refresh();
      }
      else{
        alert("Could not approve")
      }
    })
  }

  rejectCharity(_id){
    var data={"approved": "reject","id":_id};
    this.service.rejectCharity(data).subscribe((res)=>{
      if(res){
        alert('Are you sure!')
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
