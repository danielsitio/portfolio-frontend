import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginForm } from 'src/app/model/login-form';
import { AuthService } from 'src/app/services/auth.service';
import { loginQuestions } from 'src/assets/project-forms';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {

  questions = loginQuestions
  showForm: boolean = false

  isLoggedIn: boolean = false

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.isLoggedIn.asObservable().subscribe(value => this.isLoggedIn = value)
  }

  openForm = () => this.showForm = true
  closeForm = () => this.showForm = false

  login = (loginForm: LoginForm) => this.authService.login(loginForm).subscribe(this.closeForm)
  logout = () => this.authService.logout().subscribe()

  navHome = () => this.router.navigate([""])


}
