import { Routes, RouterModule } from '@angular/router';
import { EditorComponent } from './editor.component';
import {CreateComponent} from '../charts/components/create/create.component';

const childRoutes: Routes = [
    {
        path: '',
        component: EditorComponent,
        children: [
          { path: '', redirectTo: 'default-tables', pathMatch: 'full' },
          { path: 'create', component: CreateComponent },
          { path: 'approve', component: CreateComponent },
          { path: 'view', component: CreateComponent },
      ]
    }
];

export const routing = RouterModule.forChild(childRoutes);
