import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddItemComponent } from './add-item/add-item.component';
import { DisplayItemsComponent } from './display-items/display-items.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { SharedModule } from '../shared/shared.module';
import { SortTaskPipe } from './sort-task.pipe';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [AddItemComponent, DisplayItemsComponent, SortTaskPipe, FilterPipe],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    SharedModule,
    MatIconModule,
    FormsModule
  ]
})
export class TodoModule { }
