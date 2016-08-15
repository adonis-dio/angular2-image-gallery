import { Component } from 'angular2/core';
import { GalleryService } from './gallery.service';
import { Http, HTTP_PROVIDERS } from 'angular2/http';

@Component({
    selector: 'gallery',
    providers: [GalleryService],
    styles: [`
    .img-thumb { overflow: hidden; float: left; width: 200px; cursor: pointer; transition: 0.3s; } 
    .img-thumb:hover { opacity: 0.7; } 
    .selected { opacity: 0.5 }
    .imodal { width:100%; height:100%; left: 0; top: 0; padding-top: 10%; overflow: auto; position: fixed; z-index: 999; background-color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0.9) }
    .imodal-content { margin: auto; display: block; width: 80%; max-width: 900px; }
    .caption { text-align: center; color: #ccc; }
    .close-btn { cursor:pointer; position: absolute; right: 0; top: 0; padding: 10px; color: #ccc; }
    .close-btn:hover { color: #fff; }
    .imodal-content, .caption { -webkit-animation-name: zoom; -webkit-animation-duration: 0.6s; animation-name: zoom; animation-duration: 0.6s;}
    @-webkit-keyframes zoom { from {-webkit-transform:scale(0)} to {-webkit-transform:scale(1)}}
    @keyframes zoom { from {transform:scale(0)} to {transform:scale(1)}}
    `],
    template: `
    <div *ngFor="#image of images | async" (click)="select(image)">        
        <div class="text-center img-thumb"><img src="{{ image.url }}" height="200" [class.selected]="isSelected == image" alt="{{ image.alt }}"></div>
        
        <div class="text-center imodal" *ngIf="isSelected == image">
            <span class="close-btn" (click)="deselect()"><h1>&times;</h1></span>
            <img src="{{ image.url }}" class="imodal-content">
            <span class="caption">{{ image.alt }}</span>
        </div>

    </div>
    `
})

export class GalleryComponent {
    images: any;
    isSelected = false;
    close = false;

    constructor(private _galleryService: GalleryService) {
        this.images = _galleryService.getFriends();
    }

    select(image){
        if(this.isSelected != image && this.close == false)
            this.isSelected = image;
        else if(this.isSelected == image && this.close == true)
            this.isSelected = false;
            this.close = false;
    }
    deselect(){
        this.close = true;
    }
} 