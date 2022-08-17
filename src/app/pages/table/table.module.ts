import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './table.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';

/* components */
import { TableComponent } from './table.component';
import { BasicTablesComponent } from './components/basic-tables/basic-tables.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { TilesListComponent } from './components/tiles-list/tiles-list.component';
import {ModalModule} from 'ngx-modal';

@NgModule({
  imports: [
    NgxPaginationModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    routing,
    ModalModule
  ],
    declarations: [
        TableComponent,
        BasicTablesComponent,
        DataTableComponent,
        TilesListComponent
    ]
})
export class TableModule { }
