import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { PROCEDENCIAService } from 'src/app/SERVICIOS/procedencia.service';

@Component({
  selector: 'app-lista-procedencia',
  templateUrl: './lista-procedencia.component.html',
  styleUrls: ['./lista-procedencia.component.css']
})
export class LISTAPROCEDENCIAComponent implements OnInit {
  procedencia: any[]=[];

  constructor(private _procedenciaservice: PROCEDENCIAService,
          private toastr: ToastrService) {

   }
   ngOnInit(): void{
    this.getprocedencia()
   }

  getprocedencia(): void {
    this._procedenciaservice.getprocedencia().subscribe(data =>{
      this.procedencia =[];
      data.forEach((element:any)=> {
        this.procedencia.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })

      });
      console.log(this.procedencia);
    });
  }
  eliminarprocedencia(id: string){
    this._procedenciaservice.eliminarprocedencia(id).then(() =>{
     console.log('registro eliminado');
     this.toastr.error('registro eliminado','eliminado exitosamente')
    }).catch(error =>{
      console.log(error);
    })

  }

}
