import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EducationComponent } from './components/education/education.component';
import { EducationListComponent } from './components/education-list/education-list.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

const routes: Routes = [
  {
    path: "",
    component: MainPageComponent,
    data: {
      isEditable: false
    }
  },
  {
    path: "edit",
    component: MainPageComponent,
    data: {
      isEditable: true
    },
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
