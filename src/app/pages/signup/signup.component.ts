import { Component } from '@angular/core';
import { DefaultLoginLayoutComponent } from '../../components/default-login-layout/default-login-layout.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';

interface SignupForm {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ 
    DefaultLoginLayoutComponent, 
    ReactiveFormsModule, 
    PrimaryInputComponent
  ],
  providers: [LoginService],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  signupForm!: FormGroup;
 
  constructor( 
    private router: Router,
    private toastrService: ToastrService,
    private SignupService: LoginService
  ) {
    this.signupForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      passwordConfirm: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  submit() {
    alert("Site em construção");
    // console.log(this.SignupForm.value);
    this.SignupService.login(this.signupForm.value.email, this.signupForm.value.password).subscribe({
      next: () => this.toastrService.success("Logado com sucesso"),
      error: () => this.toastrService.error("Erro ao logar")
    });
  }
  
  navigate() {
    this.toastrService.info("Voltando para o sistema...");
    this.router.navigate(['/login']);
  }
}
