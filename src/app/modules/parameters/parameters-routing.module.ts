import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryCreationComponent } from './category/category-creation/category-creation.component';
import { CategoryEditComponent } from './category/category-edit/category-edit.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { CategoryRemoveComponent } from './category/category-remove/category-remove.component';
import { MarcaCreationComponent } from './marca/marca-creation/marca-creation.component';
import { MarcaEditComponent } from './marca/marca-edit/marca-edit.component';
import { MarcaListComponent } from './marca/marca-list/marca-list.component';

const routes: Routes = [

  {path:'cat/creacion', component:CategoryCreationComponent},
  {path:'cat/editar', component:CategoryEditComponent},
  {path:'cat/listado', component:CategoryListComponent},
  {path:'cat/eliminar', component:CategoryRemoveComponent},
  {path:'cat/eliminar', component:CategoryRemoveComponent},

  {path: 'mar/creacion ', component:MarcaCreationComponent },
  {path: 'mar/editar ', component:MarcaEditComponent },
  {path: 'mar/listado ', component:MarcaListComponent },
 


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametersRoutingModule { }
