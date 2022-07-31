import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/security/login/login.component';
import { RegistryComponent } from './components/registry/registry.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//modulos material
import {MatButtonModule} from '@angular/material/button'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatCardModule} from '@angular/material/card'; 
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu'; 
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatListModule} from '@angular/material/list'; 

import { InicioComponent } from './components/inicio/inicio.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/inicio/navbar/navbar/navbar.component';
import { FooterComponent } from './components/inicio/footer/footer/footer.component';
import { SidebarComponent } from './components/inicio/sidebar/sidebar/sidebar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    InicioComponent,
    AppComponent,
    LoginComponent,
    RegistryComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    PageNotFoundComponent
  ],
  imports: [

    HttpClientModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatListModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatMenuModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
