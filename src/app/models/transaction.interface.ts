import dayjs from 'dayjs';
import { Category } from './category.interface';

export interface Transaction {
  id: string;
  name: string;
  amount: number;
  category: Category;
  date: dayjs.Dayjs;
}
