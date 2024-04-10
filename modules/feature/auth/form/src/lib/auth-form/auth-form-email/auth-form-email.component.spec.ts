import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthFormComponent } from '../auth-form.component';
import { AuthFormEmailComponent } from './auth-form-email.component';

describe('AuthFormEmailComponent', () => {
  let component: AuthFormEmailComponent;
  let fixture: ComponentFixture<AuthFormEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthFormEmailComponent],
      //Coloca todas as injeção de dependencia do componente para o teste não quebrar
      providers: [AuthFormComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AuthFormEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
