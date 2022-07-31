import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametersRoutingModule } from './parameters-routing.module';
import { CategoryCreationComponent } from './category/category-creation/category-creation.component';
import { CategoryEditComponent } from './category/category-edit/category-edit.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { CategoryRemoveComponent } from './category/category-remove/category-remove.component';
import { MarcaCreationComponent } from './marca/marca-creation/marca-creation.component';
import { MarcaEditComponent } from './marca/marca-edit/marca-edit.component';
import { MarcaListComponent } from './marca/marca-list/marca-list.component';


@NgModule({
  declarations: [
    CategoryCreationComponent,
    CategoryEditComponent,
    CategoryListComponent,
    CategoryRemoveComponent,
    MarcaCreationComponent,
    MarcaEditComponent,
    MarcaListComponent
  ],
  imports: [
    CommonModule,
    ParametersRoutingModule
  ]
})
export class ParametersModule { }
