import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditEventComponent } from './Events/add-edit-event/add-edit-event.component';

const routes: Routes = [
  { path: 'add-event', component: AddEditEventComponent },
  { path: 'edit-event', component: AddEditEventComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
