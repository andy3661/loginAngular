import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { RegistryComponent } from './components/registry/registry.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


const routes: Routes = [{path : '', redirectTo :'inicio', pathMatch : 'full'},
{path: 'inicio', component: InicioComponent},
{path: 'registry', component: RegistryComponent},

{path: 'seguridad', loadChildren: () =>  import('./modules/security/security.module').then(m=>m.SecurityModule)},
{path: 'parametros', loadChildren: () =>  import('./modules/parameters/parameters.module').then(m=>m.ParametersModule)},
{path: 'reportes', loadChildren: () =>  import('./modules/reports/reports.module').then(m=>m.ReportsModule)},
{path: 'cliente', loadChildren: () =>  import('./modules/customer/customer.module').then(m=>m.CustomerModule)},
{path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
}
