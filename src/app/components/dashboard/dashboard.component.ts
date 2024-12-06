import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { TransactionFormComponent } from '../transaction/transaction-form/transaction-form.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ButtonModule, DynamicDialogModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  providers: [DialogService],
})
export class DashboardComponent {
  private dialogService = inject(DialogService);
  addTransition() {
    this.dialogService.open(TransactionFormComponent, {
      header: 'Add New Transaction',
      appendTo: 'body',
    });
  }
}
