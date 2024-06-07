import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MapService } from '../services/map.service';
import { Scene } from './interfaces';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  @ViewChild('background') background: ElementRef
  @ViewChild('layer') layer: ElementRef
  scenes: Scene[] = []
  currentPosition = 0;
  currentImagePositionLeft = 50;

  constructor(
    private mapService: MapService
  ) {
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.mapService.getMaps().subscribe(
      res => {
        this.scenes = res;
      }
    )
  }

  resetCurrentImagePosition() {
    this.currentImagePositionLeft = 50;
    this.setLeftPosition();
  }

  ngAfterViewInit() {
    this.background.nativeElement.style.top = '50%';
    this.layer.nativeElement.style.top = '50%';
    this.resetCurrentImagePosition();
  }

  setLeftPosition() {
    this.background.nativeElement.style.left = this.currentImagePositionLeft + '%';
    this.layer.nativeElement.style.left = this.currentImagePositionLeft + '%';
    console.log(this.background.nativeElement.getBoundingClientRect())
    this.layer.nativeElement.style.width = this.background.nativeElement.getBoundingClientRect().width + 'px';
    this.layer.nativeElement.style.height = this.background.nativeElement.getBoundingClientRect().height + 'px';
    console.log(this.layer.nativeElement.getBoundingClientRect())
  }

  rotateLeft() {
    if (this.background.nativeElement.getBoundingClientRect().x > 0) return;
    this.currentImagePositionLeft += 25;
    this.setLeftPosition();
  }

  rotateRight() {
    if (Math.abs(this.background.nativeElement.getBoundingClientRect().x) > (this.background.nativeElement.getBoundingClientRect().width)) return;
    this.currentImagePositionLeft -= 25;
    this.setLeftPosition();
  }
}
