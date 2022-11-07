import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CREARPROCEDENCIAComponent } from './COMPONENTES/crear-procedencia/crear-procedencia.component';
import { LISTAPROCEDENCIAComponent } from './COMPONENTES/lista-procedencia/lista-procedencia.component';

const routes: Routes = [
  {path:'',redirectTo:'lista-procedencia', pathMatch:'full'},
  {path:'lista-procedencia',component:LISTAPROCEDENCIAComponent},
  {path:'crear-procedencia',component:CREARPROCEDENCIAComponent},
  {path:'editar-procedencia/:id',component:CREARPROCEDENCIAComponent},
  {path:'**',redirectTo:'lista-procedencia', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
