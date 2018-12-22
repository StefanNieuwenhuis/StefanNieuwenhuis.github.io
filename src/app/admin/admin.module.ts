import { SpinnerModule } from './../shared/components/spinner/spinner.module';

import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AngularEditorModule } from '@kolkov/angular-editor';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { NewPostComponent } from './new-post/new-post.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    AngularEditorModule,
    SpinnerModule
  ],
  declarations: [AdminDashboardComponent, AdminComponent, EditPostComponent, NewPostComponent]
})
export class AdminModule { }
