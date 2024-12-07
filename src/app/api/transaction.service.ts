import { computed, inject, Injectable, signal } from '@angular/core';
import dayjs from 'dayjs/esm';
import { v4 as uuidv4 } from 'uuid';
import { removeDefaultValues } from '../../utils/removeDefaultValues';
import { CategoryType } from '../models/category.interface';
import { Transaction } from '../models/transaction.interface';
import { StorageService } from '../storage.service';
@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private storageService = inject(StorageService);

  transactions = signal<Transaction[]>(defaultTransactionsState);

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
      return [
        {
          ...transaction,
          id: uuidv4(),
          date: dayjs(transaction.date).toISOString(),
        },
        ...prev,
      ];
    });
    this.storageService.clearStorage('transactions');

    this.storageService.writeToStorage(
      removeDefaultValues(this.transactions(), defaultTransactionsState),
      'transactions'
    );
  }

  setTransaction() {
    const storageTransactions =
      this.storageService.readFromStorage<Transaction>('transactions');

    if (storageTransactions.length <= 0) return;
    this.transactions.update((prev) => {
      const filtered = [...storageTransactions, ...prev];

      return filtered;
    });
  }
}

const defaultTransactionsState = [
  {
    id: '1',
    name: 'Random transaction 1',
    amount: 1925.72,
    category: {
      id: 65,
      name: 'Electronics',
      type: CategoryType.Expense,
    },
    date: dayjs('2024-12-22').toISOString(),
  },
];
