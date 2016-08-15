import { Component } from 'angular2/core';
import { GalleryService } from './gallery.service';
import { Http, HTTP_PROVIDERS } from 'angular2/http';

@Component({
    selector: 'gallery',
    providers: [GalleryService],
    styles: [`
    .img-holder { overflow: hidden; float: left; width: 200px } 
    .selected { opacity: 0.5 }
    .img-pop { width:100%; height:100%; position: absolute; z-index: 999 }
    `],
    template: `
    <div *ngFor="#image of images | async" (click)="select(image)">
        <div class="text-center img-pop" *ngIf="isSelected == image"><img src="{{ image.url }}"></div>
        <div class="text-center img-holder"><img src="{{ image.url }}" height="200" [class.selected]="isSelected == image" alt="{{ image.alt }}"></div>
    </div>
    `
})

export class GalleryComponent {
    images: any;
    isSelected;

    constructor(private _galleryService: GalleryService) {
        this.images = _galleryService.getImages();
    }

    select(image){
        if(this.isSelected != image)
            this.isSelected = image;
        else
            this.isSelected = false;
    }
} 