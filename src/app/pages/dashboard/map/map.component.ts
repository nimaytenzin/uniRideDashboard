import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet'
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {    
    var map = L.map('map').setView([27.4712216,89.6339041], 13);
    L.tileLayer('https://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}@2x.png').addTo(map);
  

  var blueIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-black.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  var yellowIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-black.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  var redIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-black.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

    var nima = L.marker([27.459041, 89.647122],{icon: blueIcon}).addTo(map);
    var kinley = L.marker([27.474182, 89.638384], {icon:yellowIcon}).addTo(map);
    var hem = L.marker([27.442787, 89.661852],{icon: redIcon}).addTo(map);
    nima.bindPopup(`<table> 
                      <tr>
                        <td>Driver</td><td>Nima Tenzin</td>
                      </tr> 
                      <tr>
                        <td>Vehicle</td><td>BG-2A-1002 | Toyota Hilux</td>
                      </tr>
                      <tr>
                        <td>Status</td><td>Available</td>
                      </tr>
                       
                    </table>
                    <button style="width:100%;border:none;background-color: #333434; color: white;">Contact</button>`
    ).openPopup();

    kinley.bindPopup(`<table> 
                      <tr>
                        <td>Driver</td><td>Kinley Wangyal</td>
                      </tr> 
                      <tr>
                        <td>Vehicle</td><td>BG-1-3001 | Toyota Camry</td>
                      </tr>
                      <tr>
                        <td>Status</td><td>En Route</td>
                      </tr>
                       
                    </table>
                    <button style="width:100%;border:none;background-color: #333434; color: white;">Contact</button>`
    ).openPopup();
    
    hem.bindPopup(`<table> 
                      <tr>
                        <td>Driver</td><td>Hem Bdr</td>
                      </tr> 
                      <tr>
                        <td>Vehicle</td><td>BG-1A-3341 | Toyota Prado	</td>
                      </tr>
                      <tr>
                        <td>Status</td><td>Not Available</td>
                      </tr>
                       
                    </table>
                    <button style="width:100%;border:none;background-color: #333434; color: white;">Contact</button>`
    ).openPopup();
    
  }
}
