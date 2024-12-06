import { computed, Injectable, signal } from '@angular/core';
import dayjs from 'dayjs';
import { CategoryType } from '../models/category.interface';
import { Transaction } from '../models/transaction.interface';
@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  transactions = signal<Transaction[]>([
    {
      id: '1',
      name: 'Random transaction 1',
      amount: 1925.72,
      category: {
        name: 'Electronics',
        type: CategoryType.Expense,
      },
      date: dayjs('2024-12-22'),
    },
    {
      id: '2',
      name: 'Random transaction 2',
      amount: 2128.38,
      category: {
        name: 'Job',
        type: CategoryType.Income,
      },
      date: dayjs('2024-12-13'),
    },
    {
      id: '3',
      name: 'Random transaction 3',
      amount: 2897.4,
      category: {
        name: 'Food',
        type: CategoryType.Expense,
      },
      date: dayjs('2024-12-07'),
    },
    {
      id: '4',
      name: 'Random transaction 4',
      amount: 4869.19,
      category: {
        name: 'Investment',
        type: CategoryType.Income,
      },
      date: dayjs('2024-12-31'),
    },
    {
      id: '5',
      name: 'Random transaction 5',
      amount: 4842.99,
      category: {
        name: 'Job',
        type: CategoryType.Income,
      },
      date: dayjs('2024-12-23'),
    },
    {
      id: '6',
      name: 'Random transaction 6',
      amount: 4158.48,
      category: {
        name: 'Gift',
        type: CategoryType.Income,
      },
      date: dayjs('2024-12-03'),
    },
    {
      id: '7',
      name: 'Random transaction 7',
      amount: 3912.26,
      category: {
        name: 'Gift',
        type: CategoryType.Income,
      },
      date: dayjs('2024-12-07'),
    },
    {
      id: '8',
      name: 'Random transaction 8',
      amount: 1141.53,
      category: {
        name: 'Utilities',
        type: CategoryType.Expense,
      },
      date: dayjs('2024-12-12'),
    },
    {
      id: '9',
      name: 'Random transaction 9',
      amount: 4850.11,
      category: {
        name: 'Utilities',
        type: CategoryType.Expense,
      },
      date: dayjs('2024-12-05'),
    },
    {
      id: '10',
      name: 'Random transaction 10',
      amount: 2838.84,
      category: {
        name: 'Food',
        type: CategoryType.Expense,
      },
      date: dayjs('2024-12-02'),
    },
    {
      id: '11',
      name: 'Random transaction 11',
      amount: 378.91,
      category: {
        name: 'Transport',
        type: CategoryType.Expense,
      },
      date: dayjs('2024-12-08'),
    },
    {
      id: '12',
      name: 'Random transaction 12',
      amount: 500.49,
      category: {
        name: 'Health',
        type: CategoryType.Expense,
      },
      date: dayjs('2024-12-10'),
    },
    {
      id: '13',
      name: 'Random transaction 13',
      amount: 3478.44,
      category: {
        name: 'Investment',
        type: CategoryType.Income,
      },
      date: dayjs('2024-12-15'),
    },
    {
      id: '14',
      name: 'Random transaction 14',
      amount: 2754.67,
      category: {
        name: 'Job',
        type: CategoryType.Income,
      },
      date: dayjs('2024-12-05'),
    },
    {
      id: '15',
      name: 'Random transaction 15',
      amount: 152.38,
      category: {
        name: 'Education',
        type: CategoryType.Expense,
      },
      date: dayjs('2024-12-18'),
    },
    {
      id: '16',
      name: 'Random transaction 16',
      amount: 1999.99,
      category: {
        name: 'Electronics',
        type: CategoryType.Expense,
      },
      date: dayjs('2024-12-01'),
    },
    {
      id: '17',
      name: 'Random transaction 17',
      amount: 800.25,
      category: {
        name: 'Food',
        type: CategoryType.Expense,
      },
      date: dayjs('2024-12-29'),
    },
    {
      id: '18',
      name: 'Random transaction 18',
      amount: 276.34,
      category: {
        name: 'Transport',
        type: CategoryType.Expense,
      },
      date: dayjs('2024-12-25'),
    },
    {
      id: '19',
      name: 'Random transaction 19',
      amount: 3200.0,
      category: {
        name: 'Job',
        type: CategoryType.Income,
      },
      date: dayjs('2024-12-27'),
    },
    {
      id: '20',
      name: 'Random transaction 20',
      amount: 650.49,
      category: {
        name: 'Health',
        type: CategoryType.Expense,
      },
      date: dayjs('2024-12-20'),
    },
  ]);

  private calculateTotalByType = (categoryType: CategoryType) =>
    this.transactions().reduce((acc, transaction) => {
      return transaction.category.type === categoryType
        ? acc + transaction.amount
        : acc;
    }, 0);

  totalIncome = computed(() => this.calculateTotalByType(CategoryType.Income));
  totalExpense = computed(() =>
    this.calculateTotalByType(CategoryType.Expense)
  );
  balance = computed(() => this.totalIncome() - this.totalExpense());

  addTransaction(transaction: Transaction) {
    this.transactions.update((prev) => {
      return [{ ...transaction, date: dayjs(transaction.date) }, ...prev];
    });
  }
}
