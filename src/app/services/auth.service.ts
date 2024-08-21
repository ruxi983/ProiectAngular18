import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor() { }

authUser(user: any) : Array<any>{

  console.log(user);

  let UserArray:Array<any> = [];
  if(localStorage.getItem('Users')){
    UserArray = JSON.parse(localStorage.getItem('Users')!);
    //UserArray.push(object);
  }
  return UserArray.find((p) => p.userName === user.userName && p.password === user.password);
}

}
