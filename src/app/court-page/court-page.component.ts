import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Court } from '../courts/courts.component';
import * as Mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';
import { SocialAuthService } from 'angularx-social-login';
import { User } from '../app.component';

@Component({
  selector: 'app-court-page',
  templateUrl: './court-page.component.html',
  styleUrls: ['./court-page.component.css'],
})
export class CourtPageComponent implements OnInit {
  map!: Mapboxgl.Map;
  id!: number;
  name!: string;
  currentCourtTime!: string[];
  logedUsers: User[] = [];

  courtsArray: Court[] = [
    {
      id: 1,
      lat: 28.50335,
      lon: 49.248528,
      name: 'School #30',
      availableGames: ['10:45', '15:45', '19:00'],
    },
    {
      id: 2,
      lat: 28.405557,
      lon: 49.224227,
      name: "Basketball court 'Carolina'",
      availableGames: ['12:30', '16:45', '22:00'],
    },
  ];
  constructor(
    private router: ActivatedRoute,
    public socialAuthService: SocialAuthService
  ) {
    (Mapboxgl.accessToken as any) = environment.mapboxKey;
  }

  ngOnInit(): void {
    this.router.params.subscribe((data) => {
      const ID = parseInt(data.id);
      console.log(ID);
      this.courtsArray.forEach((court) => {
        if (court.id === ID) {
          this.name = court.name;
          this.currentCourtTime = court.availableGames;
          console.log(this.currentCourtTime);
          this.map = new Mapboxgl.Map({
            container: `map`,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [court.lat, court.lon],
            zoom: 16,
          });
          const MARKER = new Mapboxgl.Marker()
            .setLngLat([court.lat, court.lon])
            .addTo(this.map);
        }
      });
    });
  }
  registerUser(user: any) {
    user.subscribe((data: any) => {
      let user: User = {
        name: data.name,
        email: data.email,
      };
      this.logedUsers.push(user);
    });
  }
}
