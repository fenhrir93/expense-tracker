import { Injectable, signal } from '@angular/core';
import { Category, CategoryType } from '../models/category.interface';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  categories = signal<Category[]>([
    { name: 'Groceries', type: CategoryType.Expense },
    { name: 'Salary', type: CategoryType.Income },
    { name: 'Entertainment', type: CategoryType.Expense },
    { name: 'Rent', type: CategoryType.Expense },
    { name: 'Utilities', type: CategoryType.Expense },
    { name: 'Bonuses', type: CategoryType.Income },
    { name: 'Transportation', type: CategoryType.Expense },
    { name: 'Freelance Work', type: CategoryType.Income },
    { name: 'Dining Out', type: CategoryType.Expense },
    { name: 'Gifts', type: CategoryType.Expense },
    { name: 'Investment Returns', type: CategoryType.Income },
    { name: 'Savings', type: CategoryType.Income },
    { name: 'Medical', type: CategoryType.Expense },
    { name: 'Education', type: CategoryType.Expense },
    { name: 'Shopping', type: CategoryType.Expense },
    { name: 'Side Income', type: CategoryType.Income },
    { name: 'Taxes', type: CategoryType.Expense },
    { name: 'Subscriptions', type: CategoryType.Expense },
    { name: 'Interest Income', type: CategoryType.Income },
    { name: 'Donations', type: CategoryType.Expense },
    { name: 'Insurance', type: CategoryType.Expense },
    { name: 'Sale of Items', type: CategoryType.Income },
    { name: 'Loan Repayment', type: CategoryType.Income },
    { name: 'Mortgage', type: CategoryType.Expense },
    { name: 'Electricity', type: CategoryType.Expense },
    { name: 'Water', type: CategoryType.Expense },
    { name: 'Vacation', type: CategoryType.Expense },
    { name: 'Other', type: CategoryType.Expense },
    { name: 'Food', type: CategoryType.Expense }, // Додана категорія з транзакцій
    { name: 'Job', type: CategoryType.Income }, // Додана категорія з транзакцій
    { name: 'Electronics', type: CategoryType.Expense }, // Додана категорія з транзакцій
  ]);

  addCategory(category: Category) {
    this.categories.update((prev) => [category, ...prev]);
  }
}
