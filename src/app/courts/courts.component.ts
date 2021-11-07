import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as Mapboxgl from 'mapbox-gl';
export interface Court {
  id: number;
  lat: number;
  lon: number;
  name: string;
  availableGames: string[];
}
@Component({
  selector: 'app-courts',
  templateUrl: './courts.component.html',
  styleUrls: ['./courts.component.css'],
})
export class CourtsComponent implements OnInit {
  map!: Mapboxgl.Map;

  courtsArray: Court[] = [
    {
      id: 0,
      lat: 28.50335,
      lon: 49.248528,
      name: 'School #30',
      availableGames: ['10:45', '11:30', '16:15'],
    },
    {
      id: 1,
      lat: 28.405557,
      lon: 49.224227,
      name: "Basketball court 'Carolina'",
      availableGames: ['12:30', '15:40', '22:10'],
    },
  ];
  constructor() {
    (Mapboxgl.accessToken as any) = environment.mapboxKey;
  }

  ngOnInit() {
    this.courtsArray.forEach((court) => {
      this.map = new Mapboxgl.Map({
        container: `map${court.id}`, // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [court.lat, court.lon], // starting position
        zoom: 17, // starting zoom
      });
      const marker = new Mapboxgl.Marker()
        .setLngLat([court.lat, court.lon])
        .addTo(this.map);
    });
  }
}
