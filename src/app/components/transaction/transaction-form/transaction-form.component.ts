import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import dayjs from 'dayjs';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { CategoryType } from '../../../models/category.interface';
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
  providers: [DialogService],
})
export class TransactionFormComponent {
  private fB = inject(FormBuilder);
  private dialogRef = inject(DynamicDialogRef);
  private dialogService = inject(DialogService);
  categoryType = CategoryType;
  transactionForm = this.fB.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    amount: [0, [Validators.required, Validators.min(0)]],
    category: ['', [Validators.required]],
    transactionDate: dayjs().format('YYYY-MM-DD'),
  });

  categories = [
    { name: 'Groceries', type: 'expense' },
    { name: 'Salary', type: 'income' },
    { name: 'Entertainment', type: 'expense' },
    { name: 'Rent', type: 'expense' },
    { name: 'Utilities', type: 'expense' },
    { name: 'Bonuses', type: 'income' },
    { name: 'Transportation', type: 'expense' },
    { name: 'Freelance Work', type: 'income' },
    { name: 'Dining Out', type: 'expense' },
    { name: 'Gifts', type: 'expense' },
    { name: 'Investment Returns', type: 'income' },
    { name: 'Savings', type: 'income' },
    { name: 'Medical', type: 'expense' },
    { name: 'Education', type: 'expense' },
    { name: 'Shopping', type: 'expense' },
    { name: 'Side Income', type: 'income' },
    { name: 'Taxes', type: 'expense' },
    { name: 'Subscriptions', type: 'expense' },
    { name: 'Interest Income', type: 'income' },
    { name: 'Donations', type: 'expense' },
    { name: 'Insurance', type: 'expense' },
    { name: 'Sale of Items', type: 'income' },
    { name: 'Loan Repayment', type: 'income' },
    { name: 'Mortgage', type: 'expense' },
    { name: 'Electricity', type: 'expense' },
    { name: 'Water', type: 'expense' },
    { name: 'Vacation', type: 'expense' },
    { name: 'Other', type: 'expense' },
  ];

  addTransaction() {
    this.dialogRef.close(this.transactionForm.getRawValue());
  }

  addCategory() {
    console.log('category');
    this.dialogService.open(CategoryFormComponent, {
      header: 'Add Category',
    });
  }
}
