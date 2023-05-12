import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { authGuard } from './guards/auth';

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
    canActivate: [authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
