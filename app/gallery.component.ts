import { Component } from 'angular2/core';
import { GalleryService } from './gallery.service';
import { Http, HTTP_PROVIDERS } from 'angular2/http';

@Component({
    selector: 'gallery',
    providers: [GalleryService],
    styles: [`
    .img-holder { overflow: hidden; float: left; width: 200px } 
    .selected { opacity: 0.5 }
    .imodal { width:100%; height:100%; left: 0; top: 0; padding-top: 10%; overflow: auto; position: fixed; z-index: 999; background-color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0.9) }
    .imodal-content { margin: auto; display: block; width: 80%; max-width: 900px; }
    .caption { margin: 10px; width: 80%; max-width: 900px; text-align: center; color: #ccc; padding: 10px 0; height: 150px; }
    `],
    template: `
    <div *ngFor="#image of images | async" (click)="select(image)">
        
        <div class="text-center imodal" *ngIf="isSelected == image">
            <img src="{{ image.url }}" class="imodal-content">
            <span class="caption">{{ image.alt }}</span>
        </div>
        <div class="text-center img-holder"><img src="{{ image.url }}" height="200" [class.selected]="isSelected == image" alt="{{ image.alt }}"></div>
    </div>
    `
})

export class GalleryComponent {
    images: any;
    isSelected;

    constructor(private _galleryService: GalleryService) {
        this.images = _galleryService.getFriends();
    }

    select(image){
        if(this.isSelected != image)
            this.isSelected = image;
        else
            this.isSelected = false;
    }
} 