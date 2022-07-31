import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteModel } from 'src/app/models/cliente.Model';
import {ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.css']
})
export class RegistryComponent implements OnInit {
  //  fgValidator: FormGroup;

  constructor( private fb:FormBuilder ,
    private service: ClienteService,
    private router: Router
    ) { }
  form: FormGroup = new FormGroup({
    documento: new FormControl(''),
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    telefono: new FormControl(''),
    correo: new FormControl(''),
    direccion: new FormControl(''),
    ciudad: new FormControl(''),
    
  });

  correo = new FormControl('', [Validators.required, Validators.email]);
  password= new FormControl('',[Validators.required]);
  ngOnInit(): void {

    // this.fgValidator.
  }

  submit(): void  {
   console.log(this.form.value.direccion);
 let model =this.getClienteData();
 this.service.CustomerRegistering(model).subscribe(
   data => {
     this.router.navigate(['seguridad/login'])
   }, error =>{
    //  showMessage("Error registering");
    console.log('Error');
   }
);
  }
  getClienteData(): ClienteModel {
    let model = new ClienteModel();
    model.documento =this.form.value.documento;
    model.nombre =this.form.value.nombre;
    model.apellido =this.form.value.apellido;
    model.telefono =this.form.value.telefono;
    model.correo =this.form.value.correo;
    model.telefono =this.form.value.telefono;
    model.direccion =this.form.value.direccion;
    model.ciudad =this.form.value.ciudad;

    return model;
   }
}
