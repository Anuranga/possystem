import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { routing } from './charts.routing';
import { NgxEchartsModule } from 'ngx-echarts';

/* components */
import { ChartsComponent } from './charts.component';
import { EChartsComponent } from './components/echarts/echarts.component';
import {CreateComponent} from './components/create/create.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        NgxEchartsModule,
        routing
    ],
    declarations: [
        ChartsComponent,
        EChartsComponent,
        CreateComponent
    ]
})
export class ChartsModule { }
