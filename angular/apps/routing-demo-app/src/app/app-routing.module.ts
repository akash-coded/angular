import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ChildAComponent } from './first/child-a/child-a.component';
import { ChildBComponent } from './first/child-b/child-b.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'first',
    title: 'First Component',
    component: FirstComponent,
    children: [
      {
        path: 'child-a',
        title: 'Child-A Component',
        component: ChildAComponent,
      },
      {
        path: 'child-b',
        title: 'Child-B Component',
        component: ChildBComponent,
      },
    ],
  },
  { path: 'second', title: 'Second Component', component: SecondComponent },
  { path: '', redirectTo: 'first', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
