import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-edit-charity',
  templateUrl: './edit-charity.component.html',
  styleUrls: ['./edit-charity.component.css']
})
export class EditCharityComponent implements OnInit {

  public id;
  public firstname;
  public lastname;
  public charityName;
  public primarynumber;
  public email;
  public password;
  public contact;
  public address;
  public city;
  public country;
  public pincode;
  suggested = false;
  theCheckbox = false;


  constructor( public service: DataService, public router: ActivatedRoute, public route: Router ) { }

  ngOnInit() {
    this.router.params.subscribe((params: Params)=>{
      this.getCharityProfile(params.id);
    });
  }

  getCharityProfile(id){
    this.id = id;
    var data = { "Course_ID": id };
    this.service.getCharityByID(id).subscribe((res) => {
      this.charityName = res['result'].charityName;
      this.email = res['result'].email;
      this.password = res['result'].password;
      this.contact = res['result'].contact;
      this.address = res['result'].address;
      this.city = res['result'].city;
      this.country = res['result'].country;
      this.pincode = res['result'].pincode;
      this.suggested = res['result'].suggested;
    })
  }

  // suggest(){
  //   var data = { 'suggested':this.suggested }
  //   this.service.suggestCharity(data).subscribe((res)=>{
    
  //   })
  // }

  // toggleVisibility(e){
  //   this.suggested= e.target.checked;
  // }

  updateProfile(){
    var data = {
      'charityName': this.charityName,
      'email':this.email,
      'password':this.password,
      'contact':this.contact,
      'address':this.address,
      'city':this.city,
      'country': this.country,
      'pincode':this.pincode,
    }
    this.service.editCharity(data,this.id).subscribe((res)=>{
      if(res['message'] == 'Updated Successfuly') {
        swal("updated successfully");
      }else {
        swal( 'Error', 'warning')
      }
    });
  }

  reroute() {
    this.route.navigate(['dashboard/approved-charities']);
  }

}
