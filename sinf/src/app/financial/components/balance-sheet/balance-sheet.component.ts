import { Component, OnInit } from '@angular/core';
import { SafTService } from 'src/app/shared/services/safT/saf-t.service';

@Component({
  selector: 'app-balance-sheet',
  templateUrl: './balance-sheet.component.html',
  styleUrls: ['./balance-sheet.component.scss']
})
export class BalanceSheetComponent implements OnInit {

  /**
   * Properties of each account:
   * - debit
   * - credit
   */
  private accounts: Object[] = [];

  private totalDebit: number = 0;
  private totalCredit: number = 0;

  constructor(private saft: SafTService) { }

  ngOnInit() {
    for (let i = 11; i <= 81; i++) {
      this.saft.get('AccountSum/' + i.toString()).subscribe(
        (data: Object) => {
          if (data['totalDebit'] != 0 || data['totalCredit'] != 0) {
            this.accounts.push({
              id: i,
              debit: data['totalDebit'],
              credit: data['totalCredit']
            })
  
            this.totalDebit += data['totalDebit']
            this.totalCredit += data['totalCredit']
          }

          console.log(this.accounts);
        }
      );
    }
  }

}
