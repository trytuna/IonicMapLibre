import { Component, ViewChild } from '@angular/core';
import { MapComponent } from '@maplibre/ngx-maplibre-gl';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(MapComponent) private map: MapComponent | null = null;

  constructor() {}

  ngAfterViewInit() {
    /**
     * This hack is needed to get the map take up the full height.
     * Unfortunately this does not work in Safari.
     * 
     * Source: https://github.com/maplibre/ngx-maplibre-gl/issues/92
     */
    setTimeout(() => this.map!.mapInstance.resize(), 0);
  }

}
