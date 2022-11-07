import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

///modulos
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
///componentes
import { AppComponent } from './app.component';
import { LISTAPROCEDENCIAComponent } from './COMPONENTES/lista-procedencia/lista-procedencia.component';
import { CREARPROCEDENCIAComponent } from './COMPONENTES/crear-procedencia/crear-procedencia.component';
import { NAVBARComponent } from './COMPONENTES/navbar/navbar.component';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    LISTAPROCEDENCIAComponent,
    CREARPROCEDENCIAComponent,
    NAVBARComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
