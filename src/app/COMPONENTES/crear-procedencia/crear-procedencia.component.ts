import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PROCEDENCIAService } from 'src/app/SERVICIOS/procedencia.service';

@Component({
  selector: 'app-crear-procedencia',
  templateUrl: './crear-procedencia.component.html',
  styleUrls: ['./crear-procedencia.component.css']
})
export class CREARPROCEDENCIAComponent implements OnInit {
  createprocedencia:FormGroup;
  submitted = false;
  loaging = false;
  id : string | null ;
  titulo = 'REGISTRAR';

  constructor(private fb: FormBuilder,
            private _procedenciaservice: PROCEDENCIAService,
            private router: Router,
            private toastr: ToastrService,
            private aRoute:ActivatedRoute) {
    this.createprocedencia = this.fb.group({
      Vendedor: ['', Validators.required],
      Procedencia: ['', Validators.required],
      Descripcion: ['', Validators.required]
    } )
    this.id = this.aRoute.snapshot.paramMap.get('id');
    console.log(this.id)


  }

  ngOnInit(): void {
    this.eseditar();
  }

  agregareditarprocedencia(){
    this.submitted = true;

    if(this.createprocedencia.invalid){
      return;
    }
    if(this. id === null){
      this.agregarprocedencia();
    }
    else{
      this.editarprocedencia(this. id);
    }
  }
  agregarprocedencia(){
    const procedencia: any ={
      Vendedor: this.createprocedencia.value.Vendedor,
      Procedencia: this.createprocedencia.value.Procedencia,
      Descripcion: this.createprocedencia.value.Descripcion,
      fechacreacion: new Date(),
      fechaActulizacion: new Date()
  }
    this.loaging = true;
    this._procedenciaservice.agregarprocedencia(procedencia).then(() =>{
        this.toastr.success('registro exitoso')
        this.router.navigate(['/lista-procedencia'])
    }).catch(error =>{
      console.log(error);
    } )
  }
  editarprocedencia(id : string){

    const procedencia: any ={
      Vendedor: this.createprocedencia.value.Vendedor,
      Procedencia: this.createprocedencia.value.Procedencia,
      Descripcion: this.createprocedencia.value.Descripcion,
      fechaActulizacion: new Date()
  }
     this. loaging = true;
    this. _procedenciaservice.actualizarprocedencia(id, procedencia).then(() =>{
      this.loaging = false;
      this.toastr.info('DATO ACTUALIZADO')
  })
  this.router.navigate(['/lista-procedencia'])
  }
  eseditar(){
    this.titulo = 'REGISTRAR';
    if(this.id !== null){
      this.loaging = true;
      this._procedenciaservice.get_procedencia(this.id).subscribe(data =>{
        this.loaging = false;
        console.log(data.payload.data()['vendedor']);
        this.createprocedencia.setValue({
          Vendedor: data.payload.data()['Vendedor'],
          Procedencia: data.payload.data()['Procedencia'],
          Descripcion: data.payload.data()['Descripcion'],
        })
      })
    }
  }
}


