import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from "./index/index.component";
import { GenresComponent } from "./Genres/Genres.component";
import { DealsComponent } from "./Deals/Deals.component";
import { LoginComponent } from "./Login/Login.component";



const routes: Routes = [
  {path: '', component: IndexComponent },
  {path: 'Home', component: IndexComponent },
  {path: 'Deals', component: DealsComponent },
  {path: 'Login', component: LoginComponent },
  {path: 'Genres', component: GenresComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
