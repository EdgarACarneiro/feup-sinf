import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TimeFrameService } from 'src/app/shared/services/timeFrame/time-frame.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  private id: string;
  
  constructor(route: ActivatedRoute, public timeframe: TimeFrameService) {
    this.id = route.snapshot.paramMap.get('id').slice(2, 11); // NIF size
  }

  ngOnInit() {
  }

}
