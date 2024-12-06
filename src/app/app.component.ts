import { Component, HostListener, inject } from '@angular/core';
import { CategoryService } from './api/category.service';
import { TransactionService } from './api/transaction.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StorageService } from './storage.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [TransactionService, StorageService, CategoryService],
})
export class AppComponent {
  private storageService = inject(StorageService);
  private transactionService = inject(TransactionService);
  private categoryService = inject(CategoryService);
  private transactions = this.transactionService.transactions;
  private categories = this.categoryService.categories;

  @HostListener('window:unload')
  private onUnload() {
    this.saveDataToStorage();
  }

  private saveDataToStorage() {
    this.storageService.writeToStorage(this.transactions(), 'transactions');
    this.storageService.writeToStorage(this.categories(), 'categories');
  }
}
