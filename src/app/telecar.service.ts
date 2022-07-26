import { Injectable } from '@angular/core';
import { LoginModel } from './login-model';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { TokenModel } from './token-model';
import { Token } from '@angular/compiler';
import { Router } from '@angular/router';
import { Telecar } from './telecar';

@Injectable({
  providedIn: 'root'
})
export class TelecarService {
  //login-modell.ts
  public loginmodel: LoginModel = new LoginModel();
  //http client hozza adasa hogy tudjuk a postot hasznalni + app.module.ts
  http: HttpClient;
  router: Router;
  public trips: Array<Telecar> = new Array<Telecar>();
  public newTrip: Telecar = new Telecar();

  constructor(http: HttpClient, router: Router) {
    this.http = http;
    this.router = router
  }
  //post request <tokenmodel> loginmodel username pass adatok ha jon valasz teletoken-en elmentjuk a localstorageba t.token
  public login(){
    this.http.post<TokenModel>('https://weblerapi.kovos.net/auth', this.loginmodel)
    .subscribe
      (t => {
        localStorage.setItem('teletoken', t.token);
        this.router.navigate(['/browse'])
        localStorage.setItem('username', this.loginmodel.username);
        //localStorage.setItem('expir', t.expiration);
        

        
      }); 
      
     
  }

  public isLoggedIn(): boolean {

    //console.log(localStorage);
    return localStorage.getItem('teletoken') != null;
    
  }

  public logout(){
    localStorage.removeItem('teletoken');
    this.router.navigate(['/login']);
  }

  public getTrips(){
    this.http.get<Array<Telecar>>('https://weblerapi.kovos.net/car')
    .subscribe(t => {
      this.trips = t;
      //console.log(this.trips);
      console.log(localStorage);
    });
  }

  public isMyself(username: string) : boolean{
    if (this.isLoggedIn()){
      
      
      let currentUser = localStorage.getItem('username');
      return username == currentUser;
      
    }
    return false;
  }

  public removeTrip(id: string){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('teletoken')}`
      
    });

    this.http.delete('https://weblerapi.kovos.net/car/' + id,
     {headers: headers})
    .subscribe(t => this.getTrips());
  }

  

  public createTicket(){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('teletoken')}`
    });
    this.http.post('https://weblerapi.kovos.net/car', this.newTrip, 
    {headers: headers})
    .subscribe(t => this.router.navigate(['/browse']));
  }


}
  