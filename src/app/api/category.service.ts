import { inject, Injectable, signal } from '@angular/core';
import { removeDefaultValues } from '../../utils/removeDefaultValues';
import { Category, CategoryType } from '../models/category.interface';
import { StorageService } from '../storage.service';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private storageService = inject(StorageService);
  categories = signal<Category[]>(defaultCategoriesState);

  addCategory(category: Category) {
    this.categories.update((prev) => [category, ...prev]);

    this.storageService.clearStorage('categories');
    this.storageService.writeToStorage(
      removeDefaultValues(this.categories(), defaultCategoriesState),
      'categories'
    );
  }

  setCategory() {
    const storageCategories =
      this.storageService.readFromStorage<Category>('categories');
    if (storageCategories.length <= 0) return;
    this.categories.update((prev) => {
      const filtered = [...storageCategories, ...prev];

      return filtered;
    });
  }
}

const defaultCategoriesState: Category[] = [
  { id: 1, name: 'Groceries', type: CategoryType.Expense },
  { id: 2, name: 'Salary', type: CategoryType.Income },
  { id: 3, name: 'Entertainment', type: CategoryType.Expense },
  { id: 4, name: 'Rent', type: CategoryType.Expense },
  { id: 5, name: 'Utilities', type: CategoryType.Expense },
  { id: 6, name: 'Bonuses', type: CategoryType.Income },
  { id: 7, name: 'Transportation', type: CategoryType.Expense },
  { id: 8, name: 'Freelance Work', type: CategoryType.Income },
  { id: 9, name: 'Dining Out', type: CategoryType.Expense },
  { id: 10, name: 'Gifts', type: CategoryType.Expense },
  { id: 11, name: 'Investment Returns', type: CategoryType.Income },
  { id: 12, name: 'Savings', type: CategoryType.Income },
  { id: 13, name: 'Medical', type: CategoryType.Expense },
  { id: 14, name: 'Education', type: CategoryType.Expense },
  { id: 15, name: 'Shopping', type: CategoryType.Expense },
  { id: 16, name: 'Side Income', type: CategoryType.Income },
  { id: 17, name: 'Taxes', type: CategoryType.Expense },
  { id: 18, name: 'Subscriptions', type: CategoryType.Expense },
  { id: 19, name: 'Interest Income', type: CategoryType.Income },
  { id: 20, name: 'Donations', type: CategoryType.Expense },
  { id: 21, name: 'Insurance', type: CategoryType.Expense },
  { id: 22, name: 'Sale of Items', type: CategoryType.Income },
  { id: 23, name: 'Loan Repayment', type: CategoryType.Income },
  { id: 24, name: 'Mortgage', type: CategoryType.Expense },
  { id: 25, name: 'Electricity', type: CategoryType.Expense },
  { id: 26, name: 'Water', type: CategoryType.Expense },
  { id: 27, name: 'Vacation', type: CategoryType.Expense },
  { id: 28, name: 'Other', type: CategoryType.Expense },
  { id: 29, name: 'Food', type: CategoryType.Expense }, // Додана категорія з транзакцій
  { id: 30, name: 'Job', type: CategoryType.Income }, // Додана категорія з транзакцій
  { id: 31, name: 'Electronics', type: CategoryType.Expense }, // Додана категорія з транзакцій
];
