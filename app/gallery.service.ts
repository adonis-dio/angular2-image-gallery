import {Injectable} from 'angular2/core';
import 'rxjs/add/operator/map';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

@Injectable()
export class GalleryService {
  images: Array<any>;

  constructor(private http: Http) {
    http.request('./data/images.json')
      .subscribe(response => this.images = response.json());
  }

  getFriends() {
    return this.http.request('./data/images.json')
      .map(res => res.json());
  }
}