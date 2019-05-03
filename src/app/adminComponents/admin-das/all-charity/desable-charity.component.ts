import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { Router } from "@angular/router";
import { faRedo } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCommentDollar } from '@fortawesome/free-solid-svg-icons';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import swal from 'sweetalert';


@Component({
  selector: "app-desable-charity",
  templateUrl: "./desable-charity.component.html",
  styleUrls: ["./desable-charity.component.css"]
})
export class DesableCharityComponent implements OnInit {

  closeResult: string;
  faRedo = faRedo;
  faSearch = faSearch;
  faCommentDollar = faCommentDollar;

  public bank :any;
  public card:any;
  public charityResult: any[];
  private page: number = 1;
  public searchResults: any[];
  public DonarName;
  public pages: Array<number>;
  public items: any;
  public pageSize: number;
  public flag: any = false;
  public flag1: any = false;
  public charityName;
  public charityResult1;
  public checked;
  public check;
  public charityId;
  public approve;
  public suggest;
  spinner: boolean;
  public id : any;
  public amount: any;
  public BankPayment: any;
  public cardPayment: any;
  public payment: any;
  public name: any;
 
  

  public pagination = {
    currentPage: 1,
    noOfItemsPerPage: 10,
    ellipses: true,
    maxSize: 10,
    totalCount: 0
  };

  constructor(public service: DataService, public router: Router, private modalService: NgbModal,config: NgbModalConfig,) {
    config.backdrop = 'static';
    config.keyboard = false;
  
  }
  setPage(i) {
    this.page = i;
    this.getCharitydetails();
  }

  open(content) {
    this.modalService.open(content);
  }

  ngOnInit() {
    this.getCharitydetails();
    this.StripeBalance();
  }

  getCharitydetails() {
    this.spinner = true;
    this.service.getCharitydetails(this.page).subscribe((Response: any) => {
      // console.log(Response);
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
    // console.log("onPageChange", e);
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
    this.charityId = id;
    this.flag = !this.flag;
    if (this.flag === false) {
      this.approve = "enable";
      swal("successfully enabled ","","success")
    } else if (this.flag === true) {
      this.approve = "disable";
      swal("successfully disabled ","","success");
    }
   
    var data = { approved: this.approve, id: this.charityId };
    this.service.disable_enable_reject(data).subscribe((Res:any) => {
      if(Res.success){
        this.getCharitydetails();
        // console.log(Res);
      }
    },(err)=>{
      swal("Error",err.error.message, "error");
    });
  }

  enable(id) {
    this.charityId = id;
    this.flag = !this.flag;
    if (this.flag === false) {
      this.approve = "enable";
      swal("successfully enabled ","","success");
    } else if (this.flag === true) {
      this.approve = "disable";
      swal("successfully disabled ","","success");
    }
    var data = { approved: this.approve, id: this.charityId };
    this.service.disable_enable_reject(data).subscribe((Res:any) => {
      if(Res.success){
        this.getCharitydetails();
          // console.log(Res);
          
    }
    },(err)=>{
      swal("Error",err.error.message, "error");
    });
  }

  suggestCharityTrue(id) {
    this.charityId = id;
    this.flag1 = !this.flag1;
    if (this.flag1 === true) {
      this.suggest = true;
      swal("Suggestion added ","","success");
    } else if (this.flag1 === false) {
      this.suggest = false;
      swal("Suggestion removed ","","success");
    }
    var data = { charityId: this.charityId, suggested: this.suggest };
    this.service.suggestCharity(data).subscribe((Response: any) => {
      if(Response.success){
          window.location.reload();
    }
    },(err)=>{
      swal("Error",err.error.message, "error");
    });
  }

  suggestCharityFalse(id) {
    this.charityId = id;
    this.flag1 = !this.flag1;
    if (this.flag1 === true) {
      this.suggest = false;
      swal("Suggestion removed ","","success");
    } else if (this.flag1 === false) {
      this.suggest = true;
      swal("Suggestion added ","","success");
    }
    var data = { charityId: this.charityId, suggested: this.suggest };
    this.service.suggestCharity(data).subscribe((Response: any) => {
     if(Response.success){
      //  console.log(Response);
       
          window.location.reload();
    }
    },(err)=>{
      swal("Error",err.error.message, "error");
    });
  }

  StripeBalance(){
    this.service.StripeBalance().subscribe((Response:any)=>{
      // console.log(Response);
      this.bank = Response.result.available[0].source_types.bank_account/100;
      this.card = Response.result.available[0].source_types.card/100;
    })
  }

  Transfer(accountId,charityName){
  this.id =  accountId;
  this.name = charityName
  // console.log(this.id,this.name);
  
  }

  Submit(){
    var data = { "account_id" : this.id , "amount":this.amount, "source_type" :this.payment }
    console.log(data);
    this.service.transfer(data).subscribe((Response: any)=>{
      console.log(Response);
      if(Response){
        swal("", `Successfully transferred ${Response.result.amount/100} USD ` ,"success");
        this.amount = null;
        this.payment = null;
      } 
    },(err)=>{
      // console.log(err);
      
      swal("Error",err.error.message, "error");
      this.amount = null;
      this.payment = null;
    })
  }
}