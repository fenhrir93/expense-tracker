import { Component, inject, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { CategoryType } from '../../../models/category.interface';

@Component({
  selector: 'app-category-form',
  standalone: true,
  imports: [
    InputTextModule,
    ButtonModule,
    ReactiveFormsModule,
    FloatLabelModule,
    DropdownModule,
  ],
  templateUrl: './category-form.component.html',
  styleUrl: './category-form.component.css',
})
export class CategoryFormComponent {
  private dialogRef = inject(DynamicDialogRef);
  categoryType = signal(Object.values(CategoryType));
  categoryForm = new FormGroup({
    name: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    type: new FormControl<CategoryType>(CategoryType.Expense),
  });

  addCategory() {
    this.dialogRef.close(this.categoryForm.getRawValue());
  }
}
