import { EspaciosService } from './../../services/espacio.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Espacio } from 'src/app/models/espacio';

@Component({
  selector: 'app-new-espacio',
  templateUrl: './new-espacio.component.html',
  styleUrls: ['./new-espacio.component.css']
})
export class NewEspacioComponent implements OnInit {
  myForm!: FormGroup;
  color ="accent";

  constructor(
    private fb: FormBuilder,
    private EspaciosService:EspaciosService,
    private router:Router,
    private snackBar:MatSnackBar
  ) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      estacionamiento:['',[Validators.required, Validators.maxLength(70)]],
      piso:['',[Validators.required]],
      numero:['',[Validators.required, Validators.maxLength(5)]],
      estado:['',[Validators.required]],
    })
  }

  saveEspacios(){
    const espacios: Espacio={
      id:0,
      estacionamiento:this.myForm.get('estacionamiento')?.value,
      piso:this.myForm.get('piso')?.value,
      numero:this.myForm.get('numero')?.value,
      estado:this.myForm.get('estado')?.value,
    };

   this.EspaciosService.newEspacios(espacios)
        .subscribe({
          next: (data)=>{
            this.snackBar.open("Registro OK",'',{
              duration:3000,
            })
            this.router.navigate(['/espacios']);
          },
          error:(err)=>{
            console.log(err);
          }
        })
  }

}