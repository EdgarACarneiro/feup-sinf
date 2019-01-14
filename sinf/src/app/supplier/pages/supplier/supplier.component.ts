import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TimeFrameService } from 'src/app/shared/services/timeFrame/time-frame.service';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent implements OnInit {

  private name: string;

  constructor(route: ActivatedRoute, public timeframe: TimeFrameService) {
    this.name = route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
  }

}
