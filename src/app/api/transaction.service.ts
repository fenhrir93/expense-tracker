import { Injectable, signal } from '@angular/core';
import dayjs from 'dayjs';
import { CategoryType } from '../models/category.interface';
import { Transaction } from '../models/transaction.interface';
@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private categoryType = CategoryType;
  transactions = signal<Transaction[]>([
    {
      id: '1',
      name: 'Grocery shopping',
      amount: 50.75,
      transactionType: 'expense',
      category: {
        name: 'Food',
        type: this.categoryType.Expense,
      },
      date: dayjs('2024-12-01'),
    },
    {
      id: '2',
      name: 'Salary',
      amount: 3000,
      transactionType: 'income',
      category: {
        name: 'Job',
        type: this.categoryType.Income,
      },
      date: dayjs('2024-12-01'),
    },
    {
      id: '3',
      name: 'Electricity bill',
      amount: 120.5,
      transactionType: 'expense',
      category: {
        name: 'Utilities',
        type: this.categoryType.Expense,
      },
      date: dayjs('2024-12-05'),
    },
    {
      id: '4',
      name: 'Freelance project',
      amount: 800,
      transactionType: 'income',
      category: {
        name: 'Side Income',
        type: this.categoryType.Income,
      },
      date: dayjs('2024-12-03'),
    },
    {
      id: '5',
      name: 'New headphones',
      amount: 150,
      transactionType: 'expense',
      category: {
        name: 'Electronics',
        type: this.categoryType.Expense,
      },
      date: dayjs('2024-12-06'),
    },
  ]);

  getTransactions(): Transaction[] {
    return this.transactions();
  }

  addTransaction(transaction: Transaction) {
    console.log(transaction);
    this.transactions.update((prev) => [
      { ...transaction, date: dayjs(transaction.date) },
      ...prev,
    ]);
  }
}
