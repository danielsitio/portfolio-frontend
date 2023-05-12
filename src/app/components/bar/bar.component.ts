import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginForm } from 'src/app/model/login-form';
import { AuthService } from 'src/app/services/auth.service';
import { loginQuestions } from 'src/assets/project-forms';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent {

  questions = loginQuestions
  showForm: boolean = false

  constructor(private router: Router, private authService: AuthService) { }
  openForm = () => this.showForm = true
  closeForm = () => this.showForm = false

  login = (loginForm: LoginForm) => {

    this.authService.login(loginForm).subscribe(() => {
      this.closeForm()
      this.router.navigate(["edit"])
    })

  }

  navHome = () => this.router.navigate([""])


}
