import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from './../environments/environment'
import { Subscription, Observable } from 'rxjs'
import { Project } from 'src/app/shared/project';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numero = 1
  $respuesta: Observable<Project> | undefined

  constructor(private http: HttpClient) {

  }

  sendLogin() {
    this.numero++
    this.$respuesta = this.http.get<Project>(environment.apiUrl + "/projects")
  }
}
