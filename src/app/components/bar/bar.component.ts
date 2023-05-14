import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
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

  disabler: Subject<boolean> = new Subject()

  isLoggedIn: boolean = false

  constructor(private router: Router, private authService: AuthService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.authService.isLoggedIn.asObservable().subscribe(value => this.isLoggedIn = value)
  }

  disableForm = () => this.disabler.next(true)
  enableForm = () => this.disabler.next(false)

  openForm = () => this.showForm = true
  closeForm = () => this.showForm = false

  login = (loginForm: LoginForm) => {
    this.disableForm()
    this.authService.login(loginForm).subscribe({
      next: this.closeForm,
      error: () => {
        this.enableForm()
        this._snackBar.open("Usuario o contraseña incorrectos.", undefined, { duration: 3000 })
      }
    })
  }
  logout = () => this.authService.logout().subscribe()

  navHome = () => this.router.navigate([""])


}
