import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TransactionFormComponent } from './components/transaction/transaction-form/transaction-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TransactionFormComponent, DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'expense-tracker';
}
