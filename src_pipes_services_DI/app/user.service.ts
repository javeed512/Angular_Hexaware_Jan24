import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { 

    console.log('user service object created');
  }


  users:User[] =[ 
        {"uid":101,"username":"javeed","email":"javeed@gmail.com","address":"hyderabad"} ,
        {"uid":102,"username":"tom","email":"tom@gmail.com","address":"pune"} ,
        {"uid":103,"username":"satish","email":"satish@gmail.com","address":"banglore"} ,
        {"uid":104,"username":"king","email":"king@gmail.com","address":"chennai"}  
         ];



  getAllUsers(){

      console.log('getAllUsers() called');
      return this.users;


  }

}
