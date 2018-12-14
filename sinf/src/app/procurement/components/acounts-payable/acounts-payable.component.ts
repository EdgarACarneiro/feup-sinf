import { Component, OnInit, Input } from '@angular/core';
import { SafTService } from 'src/app/shared/services/safT/saf-t.service';

@Component({
  selector: 'app-acounts-payable',
  templateUrl: './acounts-payable.component.html',
  styleUrls: ['./acounts-payable.component.scss']
})
export class AcountsPayableComponent implements OnInit {

  private value: number;

  constructor(private SaftService: SafTService) { }

  ngOnInit() {
  }

  @Input('timeframe')
  set timeframe(frame) {
    this.SaftService.get(`AccountSum/22?start-date=${frame.begin}&end-date=${frame.end}`).subscribe(
      (data: any) => this.value = data.totalCredit - data.totalDebit
    );
  }

}
