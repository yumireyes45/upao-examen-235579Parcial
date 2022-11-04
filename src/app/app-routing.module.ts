import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListEspaciosComponent } from './components/list-espacios/list-espacios.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'espacios', component: ListEspaciosComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}