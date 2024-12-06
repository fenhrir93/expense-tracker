import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { TableModule } from 'primeng/table';
import { TransactionFormComponent } from '../transaction/transaction-form/transaction-form.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    ButtonModule,
    DynamicDialogModule,
    TableModule,
    DatePipe,
    CurrencyPipe,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  providers: [DialogService],
})
export class DashboardComponent {
  transactions = [
    {
      name: 'Grocery Shopping',
      amount: 45.75,
      type: 'expense',
      category: 'Groceries',
      date: new Date('2024-12-05').toISOString(), // Змінити на поточну дату, якщо потрібно
    },
    {
      name: 'Salary for November',
      amount: 2000.0,
      type: 'income',
      category: 'Salary',
      date: new Date('2024-12-01').toISOString(),
    },
    {
      name: 'Movie Night',
      amount: 12.5,
      type: 'expense',
      category: 'Entertainment',
      date: new Date('2024-12-03').toISOString(),
    },
    {
      name: 'Freelance Project',
      amount: 500.0,
      type: 'income',
      category: 'Freelance Work',
      date: new Date('2024-12-04').toISOString(),
    },
    {
      name: 'Electricity Bill',
      amount: 80.25,
      type: 'expense',
      category: 'Utilities',
      date: new Date('2024-12-05').toISOString(),
    },
    {
      name: 'Interest from Savings',
      amount: 15.6,
      type: 'income',
      category: 'Interest Income',
      date: new Date('2024-12-02').toISOString(),
    },
    {
      name: 'Gift for Friend',
      amount: 50.0,
      type: 'expense',
      category: 'Gifts',
      date: new Date('2024-12-05').toISOString(),
    },
    {
      name: 'Side Income from Blog',
      amount: 120.75,
      type: 'income',
      category: 'Side Income',
      date: new Date('2024-12-01').toISOString(),
    },
    {
      name: 'Dining Out',
      amount: 35.2,
      type: 'expense',
      category: 'Dining Out',
      date: new Date('2024-12-03').toISOString(),
    },
    {
      name: 'Loan Repayment',
      amount: 250.0,
      type: 'income',
      category: 'Loan Repayment',
      date: new Date('2024-12-05').toISOString(),
    },
  ];

  private dialogService = inject(DialogService);
  addTransition() {
    this.dialogService.open(TransactionFormComponent, {
      header: 'Add New Transaction',
      appendTo: 'body',
    });
  }
}
