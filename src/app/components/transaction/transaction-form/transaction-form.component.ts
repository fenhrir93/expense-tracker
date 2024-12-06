import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';

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
})
export class TransactionFormComponent {
  private fB = inject(FormBuilder);
  transactionForm = this.fB.group({
    name: ['', [Validators.required]],
    amount: [null, [Validators.required]],
    transactionType: [],
    category: [],
    transactionDate: [],
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
}
