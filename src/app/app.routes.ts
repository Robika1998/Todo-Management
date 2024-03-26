import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { TodoComponent } from './pages/todo/todo.component';
import { DefaultComponent } from './shared/layouts/default/default.component';
import { MasterComponent } from './shared/layouts/master/master.component';
import { authGuard } from './core/guards/auth.guard';
import { guestGuard } from './core/guards/guest.guard';

export const routes: Routes = [
    {
        path: '',
        component: DefaultComponent,
        canActivate: [guestGuard],
        children: [{ path: '', component: LoginComponent }],
      },
      {
        path: '',
        component: MasterComponent,
        canActivate: [authGuard],
        children: [{ path: 'todo', component: TodoComponent }],
      },
];
