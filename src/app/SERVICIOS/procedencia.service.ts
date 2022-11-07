import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PROCEDENCIAService {

  constructor(private firestore: AngularFirestore) { }

   agregarprocedencia(procedencia: any): Promise<any>{
    return this.firestore.collection('procedencia').add(procedencia);
   }
   getprocedencia(): Observable<any>{
    return this.firestore.collection('procedencia', ref => ref.orderBy('fechacreacion','asc')).snapshotChanges();
   }
   eliminarprocedencia(id: string):Promise<any>{
    return this.firestore.collection('procedencia').doc(id).delete();
   }
   get_procedencia(id: string):Observable<any>{
    return this.firestore.collection('procedencia').doc(id).snapshotChanges();
   }
   actualizarprocedencia(id :string,data:any):Promise<any>{
    return this.firestore.collection('procedencia').doc(id).update(data);
   }
}
