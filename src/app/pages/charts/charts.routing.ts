import { Routes, RouterModule } from '@angular/router';
import { ChartsComponent } from './charts.component';
import { EChartsComponent } from './components/echarts/echarts.component';
import {CreateComponent} from './components/create/create.component';

const childRoutes: Routes = [
    {
        path: '',
        component: ChartsComponent,
        children: [
            { path: '', redirectTo: 'echarts', pathMatch: 'full' },
            { path: 'echarts', component: EChartsComponent },
            { path: 'create-order', component: CreateComponent },
        ]
    }
];

export const routing = RouterModule.forChild(childRoutes);
