import { Component, OnInit, Input } from '@angular/core';
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
  @Input() private endpoint: string; // TODO: remove = 'Administrador/ListaEmpresas';
  /**
   * True if is post, false if is get. Defaults to false
   */
  @Input() private isPost: boolean = false;
  /**
   * Body in case of Post Request. Defaults to empty object
   */
  @Input() private body: object = {};

  /**
   * Component to be extended by graphical components
   */
  constructor(private webApi: webApiService) { }

  ngOnInit() {
    this.fetchData();
  }

  /**
   * Fetch the data using configuration from the WebApi and save it in the Class's data property
   */
  fetchData() {
    console.log(this.endpoint);
    this.getRequest().subscribe(
      (response: any) => this.data = response,
      (err: any) => {
        if (err.status === 500)
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
  private getRequest() : Observable<Object> {
    return this.isPost ?
      this.webApi.post(this.endpoint, this.body) :
      this.webApi.get(this.endpoint);
  }

  getData(): any {
    return this.data;
  }
}
