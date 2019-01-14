import { Component, OnInit, Input } from '@angular/core';
import { SafTService } from 'src/app/shared/services/safT/saf-t.service';

@Component({
  selector: 'app-units-sold',
  templateUrl: './units-sold.component.html',
  styleUrls: ['./units-sold.component.scss']
})
export class UnitsSoldComponent implements OnInit {
  
  @Input() product: string;

  private value: number;

  constructor(private saft: SafTService) { }

  ngOnInit() {
  }
  
  @Input('timeframe')
  set timeframe(frame) {
    this.saft.get(`sales/units-sold/${this.product}?start-date=${frame.begin}&end-date=${frame.end}`).subscribe(
      (data: number) => this.value = data
    );
  }
}
