import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AppSettings } from '../app.settings';
import { AdminLogin } from '../models/adminlogin.model';


@Injectable({
  providedIn: 'root',
})
export class DataService {

  adminLogin: AdminLogin;


  constructor(  private http: HttpClient) { }

  AdminLogin(data: any) {
    let url = AppSettings.BASE_URL + AppSettings.ADMIN_LOGIN;
    return this.http.post(url, data);
  }

  getAdminProfile() {
    const httpOption = {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwt') })
    }
   let url = AppSettings.BASE_URL + AppSettings.ADMIN_PROFILE;
   return this.http.get(url,httpOption); 
  }

  public getCharitydetails(page) {
    const httpOption = {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwt') })
    }
    let url = AppSettings.BASE_URL + AppSettings.CHARITY_ALL;
    return this.http.get(url + '?page=' + page, httpOption);
  }

  // get charity by ID
  getCharityByID(id){
    const httpOption = {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwt') })
    }
    let url = AppSettings.BASE_URL + AppSettings.CHARITY_BY_ID + id;
    return this.http.get(url, httpOption);
  }

  approveCharity(data) {
    const httpOption = {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwt') })
    }
    let url = AppSettings.BASE_URL + AppSettings.APPROVE_CHARITY;
    return this.http.post(url, data, httpOption);
  }

  editCharity(data, id){
    const httpOption = {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwt') })
    }
    let url = AppSettings.BASE_URL + AppSettings.EDIT_CHARITY_DETAILS + id;
    return this.http.post(url, data, httpOption);
  }

  // suggestCharity(data){
  //   const httpOption = {
  //     headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwt') })
  //   }
  //   let url = AppSettings.BASE_URL + AppSettings.SUGGEST_CHARITY;
  //   return this.http.post(url,data,httpOption);
  // }

  // desableCharity(data: any) {
  //   const httpOption = {
  //     headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwt') })
  //   }
  //   let url = AppSettings.BASE_URL + AppSettings.DISABLE_CHARITY;
  //   return this.http.post(url,data,httpOption);
  // }
  
  suggestCharity(data){
    const httpOption = {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwt') })
    }
    let url = AppSettings.BASE_URL + AppSettings.SUGGEST_CHARITY;
    return this.http.post(url,data,httpOption);
  }

  disable_enable_reject(data) {
    const httpOption = {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwt') })
    }
    let url = AppSettings.BASE_URL + AppSettings.DISABLE_ENABLE_REJECT;
    return this.http.post(url,data,httpOption);
  }
  
  
  searcharity(data, page) {
    const httpOption = {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwt') })
    }
    let url = AppSettings.BASE_URL + AppSettings.SEARCH_CHARIY;
    return this.http.post(url + '?page=' + page, data,httpOption);
  }

  StripeBalance(){
    const httpOption = {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwt') })
    }
    let url = AppSettings.BASE_URL + AppSettings.BALANCE_STRIPE;
    return this.http.get(url, httpOption);
  }
  transfer(data ) {
    const httpOption = {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwt') })
    }
    let url = AppSettings.BASE_URL + AppSettings.TRANSFER_FUNDS;
    return this.http.post(url , data,httpOption);
  }
}


