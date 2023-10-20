import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapPageRoutingModule } from './map-routing.module';

import { MapPage } from './map.page';
import { NgxMapLibreGLModule } from '@maplibre/ngx-maplibre-gl';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapPageRoutingModule,
    NgxMapLibreGLModule
  ],
  declarations: [MapPage]
})
export class MapPageModule {}
