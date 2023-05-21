import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  
  signupForm:any =  FormGroup;
  submitted = false;
  signupData = {
    name: "",
    Lastname: "",
    email: "",
    mobile: "",
    genderName: "",
    birthday: "",
    password: ""
  }
  gen: any = ['male', 'female']
  hide = false;

  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      Lastname: ['', [Validators.required]],
      password: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      genderName: ['', [Validators.required]],
      birthday: ['', [Validators.required]]
    }) 
  }
  get form() { return this.signupForm.controls; }
  onSubmit(event:any){
    if(event.submitter.name = "Submit"){
      this.userSignup()
    }
  }
  userSignup(){
    this.submitted = true
    if(this.signupForm.invalid){
      return
    }
    console.log(this.signupForm)
    this.signupData.Lastname = this.signupForm.value.Lastname;
    this.signupData.birthday = this.signupForm.value.birthday;
    this.signupData.genderName = this.signupForm.value.genderName;
    this.signupData.password = this.signupForm.value.password;
    this.signupData.name = this.signupForm.value.name;
    this.signupData.email = this.signupForm.value.email;
    this.signupData.mobile = this.signupForm.value.mobile;
    console.log(this.signupData)
    // this.dataService.addSignupData(this.loginData)?.subscribe(error=> console.log('something went wrong'));
    // alert('data')
  }
  changeGander(e:any){
    // console.log(e.value)
    // this.genderName.setValue(e.target.value, {
    //   onlySelf: true
    // })
  }
  userClick(){
    this.hide = true
  }
}
