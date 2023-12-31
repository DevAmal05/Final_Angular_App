import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../user.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  addUserForm: FormGroup;

  userList: AngularFireList<any>   
  Cin:string;
  firstname:string;
  lastname:string;
  phone:string;
  constructor(private db:AngularFireDatabase, private router:Router) {

    this.userList = db.list('users')
  }


  ngOnInit(): void {

    this.addUserForm = new FormGroup({
      CIn: new FormControl('',[
        Validators.required,
        Validators.pattern("[0-9]+"),
        Validators.minLength(8)
      ]),
      Firstname: new FormControl('',[
        Validators.required,
        Validators.pattern("[a-zA-Z]+"),
       
      ]),
      Lastname: new FormControl('',[
        Validators.required,
        Validators.pattern("[a-zA-Z]+")
      ]),
      Phone: new FormControl('',[
        Validators.required,
        Validators.pattern("[0-9]+")
      ])
    });
  }


  get CIn(){
    return this.addUserForm.get('CIn')
  }
  get Firstname(){
    return this.addUserForm.get('Firstname')
  }
  get Lastname(){
    return this.addUserForm.get('Lastname')
  }
  get Phone(){
    return this.addUserForm.get('Phone')
  }


  AddUser(){
    
    let create = 'false';

    this.userList.push({
      Cin: this.Cin,
      firstname: this.firstname,
      lastname:  this.lastname,
      phone: this.phone
    }).then (added =>{
      this.router.navigate(['/people-list'])
    }).catch(error =>{
      console.error(error)
    })
    }
     
  

}









































































































































































































































































































  // errorMessage1:string ='';
  // errorMessage:string ='';
  // addUserForm: FormGroup ;
 
  // Cin:string
  // firstname:string
  // lastname:string
  // phone:string

  // userList: AngularFireList<any> 
  // constructor(private userService : UserService, public router:Router,
  //   private db:AngularFireDatabase ,private fire:AngularFireAuth) { 
      
  //     this.userList = db.list('users')
  //   }

  // ngOnInit(): void {
  //   this.addUserForm=new FormGroup({
  //     CIn: new FormControl('',[
  //       Validators.required,
  //     Validators.pattern("[0-9]+"),
  //       Validators.minLength(3)
  //     ]),
  //     fIrstname: new FormControl('',[
  //       Validators.required,
  //       Validators.pattern("[A-Za-z ]+"),
  //       Validators.minLength(3)
  //     ]),
  //     lAstname: new FormControl('',[
  //       Validators.required,
  //       Validators.pattern("[A-Za-z ]+"),
  //       Validators.minLength(3)
  //     ]),
  //     pHone: new FormControl('',[
  //       Validators.required,
  //       Validators.pattern("[0-9]+"),
  //       Validators.minLength(8),
  //       Validators.maxLength(13)
  //     ])
    
  //   });
  // }

  // onSubmit() {
 
  //   let create = 'false';
    
  //           this.userList.push({
          
  //           Cin: this.Cin ,
  //           firstname: this.firstname ,
  //           lastname: this.lastname ,
  //           phone: this.phone,
          
  //             }).then(added =>{
  //               this.router.navigate(['/people-list'])
              
              
             
        
  //   }).catch(error=>{
  //     console.error(error)
  //     this.errorMessage1= error.messaage
  //     console.log('error', error)
  //     console.log(error.message)
     
  //   })
    
  //  /*
  //   this.condactor = new Conductor(this.lastname,this.firstname,this.phone,this.address);
   
  //   console.log(this.condactor)
  //   this.conductorservice.createConductor(this.condactor)
  //   */
  
  // }


