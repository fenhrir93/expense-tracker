import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { TableModule } from 'primeng/table';
import { take } from 'rxjs';
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
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  providers: [DialogService, TransactionService],
})
export class DashboardComponent implements OnInit {
  private dialogService = inject(DialogService);
  private transactionService = inject(TransactionService);
  categoryType = CategoryType;
  transactions = this.transactionService.transactions;

  ngOnInit(): void {
    this.transactions.set(this.transactionService.getTransactions());
  }
  addTransition() {
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
}
