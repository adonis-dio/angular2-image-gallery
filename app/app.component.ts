import { Component } from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser';

import { GalleryComponent } from './gallery.component';
import { HTTP_PROVIDERS } from 'angular2/http';


@Component({
  selector: 'my-app',
  directives: [GalleryComponent],
  template: "<gallery></gallery>"
})

export class AppComponent {
}