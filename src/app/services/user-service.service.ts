import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

constructor() { }

addUser(user: any){
  let users = [];
  if(localStorage.getItem('Users')){
    users = JSON.parse(localStorage.getItem('Users')||'{}');
    users = [user, ...users];
    console.log(users);
  } else
  {
    users = [user]; //swap with users = [user, ...users] to put the element at the end of rthe array;
  }
  localStorage.setItem('Users', JSON.stringify(users));

}

}
