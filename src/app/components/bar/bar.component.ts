import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent {
  showForm: boolean = false

  constructor(private router: Router) { }
  openForm = () => this.showForm = true
  closeForm = () => this.showForm = false

  login = () => {
    this.router.navigate(["edit"])
    this.closeForm()
  }

  navHome = () => this.router.navigate([""])


}
