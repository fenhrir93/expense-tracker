import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  AutoCompleteCompleteEvent,
  AutoCompleteModule,
} from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { take } from 'rxjs';
import { CategoryService } from '../../api/category.service';
import { TransactionService } from '../../api/transaction.service';
import { CategoryType } from '../../models/category.interface';
import { Transaction } from '../../models/transaction.interface';
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
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    DropdownModule,
    FormsModule,
    AutoCompleteModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  providers: [DialogService, TransactionService, CategoryService],
})
export class DashboardComponent {
  private dialogService = inject(DialogService);
  private transactionService = inject(TransactionService);
  private categoriesService = inject(CategoryService);

  categoryType = CategoryType;
  typeFilter = Object.values(CategoryType);

  categories = this.categoriesService.categories;
  transactions = this.transactionService.transactions;
  totalIncome = this.transactionService.totalIncome;
  totalExpense = this.transactionService.totalExpense;
  balance = this.transactionService.balance;

  searchQuery = signal<string>('');
  filtered = computed(() => {
    return this.categories().filter((category) =>
      category.name.toLowerCase().includes(this.searchQuery())
    );
  });

  addTransaction() {
    this.dialogService
      .open(TransactionFormComponent, {
        header: 'Add New Transaction',
        appendTo: 'body',
      })
      .onClose.pipe(take(1))
      .subscribe((transaction: Transaction) => {
        this.transactionService.addTransaction(transaction);
      });
  }

  search(event: AutoCompleteCompleteEvent) {
    const query = event.query.toLowerCase();
    this.searchQuery.set(query);
  }
}
