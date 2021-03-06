import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators, FormControl, NgForm } from "@angular/forms";
import { DataService } from "src/app/services/data.service";
import { Router } from "@angular/router";
import swal from "sweetalert";

@Component({
  selector: "app-admin-login",
  templateUrl: "./admin-login.component.html",
  styleUrls: ["./admin-login.component.css"]
})

export class AdminLoginComponent implements OnInit {


  loginForm: FormGroup;
  loading: boolean;

  constructor(private fb: FormBuilder, public adminservices: DataService, private router: Router) { }

  ngOnInit() {
    this.resetForm();
    this.loginForm = this.fb.group({
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
      ]),
      password: new FormControl(null, [Validators.required])
    });
    let tocken = localStorage.getItem("isLogin");
    if (tocken) {
    }
  }

  resetForm(form?: NgForm) {
    if (form) form.reset();
    this.adminservices.adminLogin = {
      email: "",
      password: ""
    };
  }
  submitForm() {
    var data = {
      email: this.adminservices.adminLogin.email,
      password: this.adminservices.adminLogin.password
    };
    this.loading = true;
    this.adminservices.AdminLogin(data).subscribe(
      (res: any) => {
        if (res) {
          
          localStorage.setItem("jwt", "true");
          this.resetForm();
          this.router.navigate(["dashboard/pending-charities"]);
        }
        localStorage.setItem("jwt", res.result.jwt);
      },
      errr => {
        swal("Sorry", "Enter valid email or password", "error");
      }
    );
  }
}
