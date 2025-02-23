import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// importacion de los modulos de FireBase
import 'firebase/firestore';
// import { AngularFireModule } from '@angular/fire/compat';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

// Componentes de las Vistas Web
import { LayoutComponent } from './layout/layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InicioComponent } from './inicio/inicio.component';
import { PreciosComponent } from './precios/precios.component';
import { GelComponent } from './gel/gel.component';
import { PorcelanaComponent } from './porcelana/porcelana.component';
import { ManicuraComponent } from './manicura/manicura.component';
import { PedicuraComponent } from './pedicura/pedicura.component';
import { BlogComponent } from './blog/blog.component';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NavbarComponent,
    InicioComponent,
    PreciosComponent,
    GelComponent,
    PorcelanaComponent,
    ManicuraComponent,
    PedicuraComponent,
    BlogComponent,
    ContactoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'inicio', component: InicioComponent },
      { path: 'precios', component: PreciosComponent },
      { path: 'gel', component: GelComponent },
      { path: 'porcelana', component: PorcelanaComponent },
      { path: 'manicura', component: ManicuraComponent },
      { path: 'pedicura', component: PedicuraComponent },
      { path: 'contacto', component: ContactoComponent },
      { path: 'blog', component: BlogComponent },
    ]),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
