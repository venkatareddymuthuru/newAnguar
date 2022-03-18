import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  LoginForm:any
  constructor(
    public fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.LoginForm=this.fb.group({
      Name:[],
      pass:[]
    })

  }

  submit(){
    console.log(this.LoginForm.value);
    
  }



}
