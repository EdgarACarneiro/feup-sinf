import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TimeFrameService } from 'src/app/shared/services/timeFrame/time-frame.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  private code: string;
  
  constructor(route: ActivatedRoute, public timeframe: TimeFrameService) {
    this.code = route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
  }

}
