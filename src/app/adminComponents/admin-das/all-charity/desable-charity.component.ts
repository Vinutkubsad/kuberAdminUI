import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-desable-charity',
  templateUrl: './desable-charity.component.html',
  styleUrls: ['./desable-charity.component.css']
})
export class DesableCharityComponent implements OnInit {

  public charityResult: any[];

  private page: number = 1;
  public searchResults: any[]
  public DonarName;
  public pages: Array<number>;
  public items: any;
  public pageSize: number;
  public flag: any = false;
  public charityName;
  public charityResult1;
  spinner: boolean;

  public pagination = {
    currentPage: 1,
    noOfItemsPerPage: 10,
    ellipses: true,
    maxSize: 10,
    totalCount: 0
  }

  constructor( public service: DataService, public router: Router ) { }
  setPage(i) {
    this.page = i;
    this.getCharitydetails();
  }

  ngOnInit() {
    this.getCharitydetails();
  }

  getCharitydetails() {
    this.spinner = true;
    this.service.getCharitydetails(this.page).subscribe((Response:any) => {
      this.spinner = false;
      this.charityResult = Response.result.paginatedItems;
      this.charityResult1 = Response.result.paginatedItems[0]._id;
      this.doPagination(Response.result.itemsPerPage, Response.result.total_pages, Response.result.totalCount, Response.result.pageNo, Response.result.per_page)
    })
  }


  doPagination(itemsPerPage, total_pages, totalCount, pageNo, per_page) {
    // console.log(this.pages, itemsPerPage, total_pages, totalCount, per_page);
    this.pagination.currentPage = parseInt(pageNo);
    this.pagination.noOfItemsPerPage = per_page;
    this.pagination.totalCount = totalCount;
  }

  onPageChange(e) {
    console.log('onPageChange', e);
    this.setPage(e);
  }

  // DisableCharity(_id) {
  //   // console.log(_id);
  //   var data = {"approved" : "disable", "id":_id};
  //   this.service.desableCharity(data).subscribe((res) => {
  //     console.log(res);
  //     if(res) {
  //       alert('do you want to disable the charity');
  //       this.refresh();
  //     } else { 
  //       alert('cannot be disabled');
  //     }
  //   })
  // }

  search() {
    var data = { "name": this.charityName }
    this.service.searcharity(data, this.page).subscribe((Response: any) => {
      // console.log(Response);
      this.charityResult = Response.result.paginatedItems;
      this.doPagination(Response.result.itemsPerPage, Response.result.total_pages, Response.result.totalCount, Response.result.pageNo, Response.result.per_page)
    });
  }

  refresh(){
    window.location.reload();
  }

  editProfile(i){
    let id = this.charityResult[i]._id;
    this.router.navigate(['dashboard/edit-charity', id]);
  }
}
