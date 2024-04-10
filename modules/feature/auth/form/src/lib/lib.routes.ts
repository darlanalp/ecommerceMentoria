import { Route } from '@angular/router';
import { AuthFormComponent } from './auth-form/auth-form.component';

export const authFormRoutes: Route[] = [
  {
    path: '', component: AuthFormComponent, children: [
      {
        path: 'email', loadComponent: () => import('./auth-form/auth-form-email/auth-form-email.component').then(
          (m) => m.AuthFormEmailComponent
        ),
      },
      {
        path: 'password', loadComponent: () => import('./auth-form/auth-form-password/auth-form-password.component').then(
          (m) => m.AuthFormPasswordComponent
        ),
      },
      {
        //Tratamento para se acessar somente a rota principal sempre manda para a rota de email
        path: '',
        pathMatch: 'full',
        redirectTo: 'email',
      },
      //Se acessar qualquer rota invalida redireciona para a rota de email
      {
        path: '**',
        redirectTo: 'email',
      }
    ]
  },
];
