
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-reject-charity',
  templateUrl: './reject-charity.component.html',
  styleUrls: ['./reject-charity.component.css']
})
export class RejectCharityComponent implements OnInit {

  public charityResult: any[];
  private page: number = 1;
  public searchResults: any[];
  public DonarName;
  public pages: Array<number>;
  public items: any;
  public pageSize: number;
  public flag: any = false;
  public charityName;
  public charityResult1;
  public checked;
  public check;
  public charityId;
  public approve;
  public suggest;
  mes;
  spinner: boolean;

  public pagination = {
    currentPage: 1,
    noOfItemsPerPage: 10,
    ellipses: true,
    maxSize: 10,
    totalCount: 0
  };
  constructor( private service:DataService ) { }

  setPage(i) {
    this.page = i;
    this.getCharitydetails();
  }

  ngOnInit() {
    this.getCharitydetails();
  }
  getCharitydetails() {
    this.spinner = true;
    this.service.getCharitydetails(this.page).subscribe((Response: any) => {
      console.log(Response);
     
      if(Response.success){
      // this.spinner = false;
      this.charityResult = Response.result.paginatedItems;
      this.charityResult1 = Response.result.paginatedItems[0]._id;
      // console.log(this.charityResult1,'id');
      this.doPagination(
        Response.result.itemsPerPage,
        Response.result.total_pages,
        Response.result.totalCount,
        Response.result.pageNo,
        Response.result.per_page
      );
      }
    });
  }

  doPagination(itemsPerPage, total_pages, totalCount, pageNo, per_page) {
    // console.log(this.pages, itemsPerPage, total_pages, totalCount, per_page);
    this.pagination.currentPage = parseInt(pageNo);
    this.pagination.noOfItemsPerPage = per_page;
    this.pagination.totalCount = totalCount;
  }

  onPageChange(e) {
    console.log("onPageChange", e);
    this.setPage(e);
  }

  search() {
    var data = { name: this.charityName };
    this.service.searcharity(data, this.page).subscribe((Response: any) => {
      // console.log(Response);
      this.charityResult = Response.result.paginatedItems;
      this.doPagination(
        Response.result.itemsPerPage,
        Response.result.total_pages,
        Response.result.totalCount,
        Response.result.pageNo,
        Response.result.per_page
      );
    });
  }

  refresh() {
    window.location.reload();
  }

}