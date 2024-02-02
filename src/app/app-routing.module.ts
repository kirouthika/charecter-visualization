import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharecterListComponent } from './charecter-list/charecter-list.component';
import { CharecterDetailsComponent } from './charecter-details/charecter-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'characters', pathMatch: 'full' },
  { path: 'characters', component: CharecterListComponent },
  { path: 'characterDetails/:id', component: CharecterDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
