import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthFormComponent } from '../auth-form.component';

@Component({
  selector: 'lib-auth-form-email',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auth-form-email.component.html',
  styleUrl: './auth-form-email.component.scss',
})
export class AuthFormEmailComponent {

  //Posso usar injeção de dependência passando componentes, lembrando que vai respeitar a hierarquia  do componente, ou seja, posso 
  //pegar componentes criado anteriormente e injetar
  constructor(private authFormComponent: AuthFormComponent) {
  }
}
