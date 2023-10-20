import { Component, ViewChild } from '@angular/core';
import { ViewWillEnter } from '@ionic/angular';
import { MapComponent } from '@maplibre/ngx-maplibre-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements ViewWillEnter {
  @ViewChild(MapComponent) private map: MapComponent | null = null;

  constructor() {}

  ionViewWillEnter() {
    /**
     * This hack is needed to get the map take up the full height.
     * 
     * Source: https://github.com/maplibre/ngx-maplibre-gl/issues/92
     */
    setTimeout(() => this.map!.mapInstance.resize(), 0);
  }
}
