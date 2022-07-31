import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';
import MD5 from 'crypto-js/md5';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  email = new FormControl('', [Validators.required, Validators.email]);
  password= new FormControl('',[Validators.required]);


  constructor( private authService: AuthService,
               private router: Router
    ) { 
 
  }

  ngOnInit(): void {
  }

  submit(): void  {
    if (this.form.valid) {
      console.log(this.form.value);
      let model=this.getLoginData();
      this.authService.login(model).subscribe((data) =>{
    this.authService.sessionData(data);
       
     this.router.navigate(['/inicio'])
    });
  }
  }

  getLoginData():  UsuarioModel {
    let model =new UsuarioModel ();
    model.username = this.form.value.email;
    model.password = MD5(this.form.value.password).toString();
  
    return model;
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
