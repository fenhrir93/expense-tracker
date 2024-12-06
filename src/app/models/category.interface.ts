export interface Category {
  name: string;
  type: CategoryType;
}

export enum CategoryType {
  Expense = 'expense',
  Income = 'income',
}
