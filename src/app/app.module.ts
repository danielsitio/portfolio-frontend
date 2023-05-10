import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjectComponent } from './components/project/project.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './components/dynamic-form-question/dynamic-form-question.component';
import { ModalComponent } from './components/modal/modal.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NgLetModule } from 'ng-let';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatIconModule } from '@angular/material/icon';
import { EditButtonComponent } from './components/edit-button/edit-button.component';
import { EducationListComponent } from './components/education-list/education-list.component';
import { FileInputComponent } from './components/file-input/file-input.component';
import { EducationComponent } from './components/education/education.component';
import { ModalFormComponent } from './components/modal-form/modal-form.component'



@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    ProjectComponent,
    LoginFormComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent,
    ModalComponent,
    ProfileComponent,
    EditButtonComponent,
    EducationListComponent,
    FileInputComponent,
    EducationComponent,
    ModalFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgLetModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
