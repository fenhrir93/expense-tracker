export interface Category {
  id: number | string;
  name: string;
  type: CategoryType;
}

export enum CategoryType {
  Expense = 'expense',
  Income = 'income',
}
