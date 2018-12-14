import { Component, OnInit, Input } from '@angular/core';
import { webApiService } from '../../services/webApi/web-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-web-api-requester',
  templateUrl: './web-api-requester.component.html',
  styleUrls: ['./web-api-requester.component.scss']
})
export class WebApiRequesterComponent {

  /**
   * Data that is being fetched from web api
   */
  protected data: any;

  /**
   * Component to be extended by graphical components
   */
  constructor(private webApi: webApiService, private endpoint: string, private isPost: boolean = false, protected body: string = "") {
  }

  /**
   * Fetch the data using configuration from the WebApi and save it in the Class's data property
   */
  fetchData() {
    this.getRequest().subscribe(
      (response: any) => this.data = response,
      (err: any) => {
        if (err.status === 401)
          this.webApi.fetchToken().subscribe(
            () => this.getRequest().subscribe(
              (response: any) => this.data = response
            )
          );
      }
    );
  }

  /**
   * Retrieve the adequate request. Either a POST or a GET method.
   */
  private getRequest(): Observable<Object> {
    return this.isPost ?
      this.webApi.post(this.endpoint, JSON.stringify(this.body)) :
      this.webApi.get(this.endpoint);
  }

  /**
   * Reset data to undefined value
   */
  protected resetData() {
    this.data = undefined;
  }
}
