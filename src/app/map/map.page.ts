import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MapComponent } from '@maplibre/ngx-maplibre-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements AfterViewInit {
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
