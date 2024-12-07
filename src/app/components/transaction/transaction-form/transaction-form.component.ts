import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import dayjs from 'dayjs/esm';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { take } from 'rxjs';
import { CategoryService } from '../../../api/category.service';
import { Category, CategoryType } from '../../../models/category.interface';
import { CategoryFormComponent } from '../category-form/category-form.component';

@Component({
  selector: 'app-transaction-form',
  standalone: true,
  imports: [
    InputTextModule,
    FloatLabelModule,
    ButtonModule,
    InputNumberModule,
    DropdownModule,
    CalendarModule,
    ReactiveFormsModule,
  ],
  templateUrl: './transaction-form.component.html',
  styleUrl: './transaction-form.component.css',
  providers: [DialogService, CategoryService],
})
export class TransactionFormComponent implements OnInit {
  private fB = inject(FormBuilder);
  private dialogRef = inject(DynamicDialogRef);
  private dialogService = inject(DialogService);
  private categoryService = inject(CategoryService);
  categoryType = CategoryType;
  transactionForm = this.fB.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    amount: [0, [Validators.required, Validators.min(0)]],
    category: this.fB.control<Category | null>(null, [Validators.required]),
    date: dayjs().format('YYYY-MM-DD'),
  });

  categories = this.categoryService.categories;

  ngOnInit(): void {
    this.categoryService.setCategory();
  }

  addTransaction() {
    this.dialogRef.close(this.transactionForm.getRawValue());
  }

  addCategory() {
    this.dialogService
      .open(CategoryFormComponent, {
        header: 'Add Category',
      })
      .onClose.pipe(take(1))
      .subscribe((category: Category) => {
        this.categoryService.addCategory(category);
        this.transactionForm.patchValue({ category });
      });
  }
}
