import { Component, OnInit } from '@angular/core';
import { webApiService } from '../../services/webApi/web-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-web-api-requester',
  templateUrl: './web-api-requester.component.html',
  styleUrls: ['./web-api-requester.component.scss']
})
export class WebApiRequesterComponent implements OnInit {

  /**
   * Data that is being fetched from web api
   */
  private data: any;
  /**
   * Endpoint being used - TODO: Change to @Input type
   */
  private endpoint: string;
  /**
   * True if is post, false if is get. Defaults to false
   */
  private isPost: boolean = false;
  /**
   * Body in case of Post Request
   */
  private body: any;

  /**
   * Component to be extended by graphical components
   */
  constructor(private webApi: webApiService) { }

  ngOnInit() {
    this.fetchData();
  }

  /**
   * Config properties used to make requests
   */
  config(endpoint: string, isPost: boolean = false, body: any = null) {
    this.endpoint = endpoint;
    this.isPost = isPost;
    this.body = body;
  }

  fetchData() {
    let request: Observable<Object> = this.isPost ?
      this.webApi.post(this.endpoint, this.body) :
      this.webApi.get(this.endpoint);

    request.subscribe(
      (response: any) => console.log(response), //this.data = response.data
      (err: any) => {
        if (err.status === 500)
          this.webApi.fetchToken().subscribe(
            () => request.subscribe(
              (secResponse: any) => console.log(secResponse)
            )
          );
      }
    );
  }

  getData(): any {
    return this.data;
  }
}
