import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { Router } from "@angular/router";
import swal from 'sweetalert';


@Component({
  selector: "app-desable-charity",
  templateUrl: "./desable-charity.component.html",
  styleUrls: ["./desable-charity.component.css"]
})
export class DesableCharityComponent implements OnInit {
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
  spinner: boolean;

  public pagination = {
    currentPage: 1,
    noOfItemsPerPage: 10,
    ellipses: true,
    maxSize: 10,
    totalCount: 0
  };

  constructor(public service: DataService, public router: Router) {}
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

      this.spinner = false;
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

  editProfile(i) {
    let id = this.charityResult[i]._id;
    this.router.navigate(["dashboard/edit-charity", id]);
  }

  disable(id) {
    console.log(id);
    this.charityId = id;
    this.flag = !this.flag;
    if (this.flag === false) {
      this.approve = "enable";
      swal("successfully disable ","good","succes")
    } else if (this.flag === true) {
      this.approve = "disable";
      swal("successfully enabled ","good","succes");
    }
    var data = { approved: this.approve, id: this.charityId };
    this.service.disable_enable(data).subscribe((Res:any) => {
      // if(this.approve = "disable"){
        // swal("successfully disable ","good","succes")
        window.location.reload();
        // }else
        // swal("successfully enabled ","good","succes");
        // window.location.reload();
    });
  }

  enable(id) {
    console.log(id);
    this.charityId = id;
    this.flag = !this.flag;
    if (this.flag === true) {
      this.approve = "enable";
      swal("successfully enabled ","good","succes");
    } else if (this.flag === false) {
      this.approve = "disable";
      swal("successfully disabled ","good","succes");
    }
    var data = { approved: this.approve, id: this.charityId };
    this.service.disable_enable(data).subscribe((Res:any) => {
      if(Res.succes){
        // console.log(Res);
        
    //   if(this.approve = "enable"){
    //   swal("successfully enabled ","good","succes");
    //   window.location.reload();
    //   }else
    //   swal("successfully disabled ","good","succes");
    //   window.location.reload();
    }
    },(err)=>{
      swal("Error","something went wrong", "error");
    });
  }

  suggestCharityTrue(id) {
    this.charityId = id;
    this.flag = !this.flag;
    if (this.flag === true) {
      this.suggest = true;
    } else if (this.flag === false) {
      this.suggest = false;
    }
    var data = { charityId: this.charityId, suggested: this.suggest };
    this.service.suggestCharity(data).subscribe((Response: any) => {
      console.log(Response);
      console.log(true);
    });
  }
  suggestCharityFalse(id) {
    this.charityId = id;
    this.flag = !this.flag;
    if (this.flag === true) {
      this.suggest = false;
    } else if (this.flag === false) {
      this.suggest = true;
    }
    var data = { charityId: this.charityId, suggested: this.suggest };
    this.service.suggestCharity(data).subscribe((Response: any) => {
      console.log(false);

      console.log(Response);
    });
  }
}
