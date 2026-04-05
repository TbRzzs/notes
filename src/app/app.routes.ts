import { Routes } from '@angular/router';
import { Workspace } from './workspace/workspace';
import { Home } from './home/home';


export const routes: Routes = [
    {
        path: 'workspace',
        component: Workspace,
    },
    {
        path: '**',
        component: Home,
    },
];
