import { Component, HostBinding, OnInit } from '@angular/core';
import * as L from 'leaflet';
import dialogPolyfill from 'dialog-polyfill'

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss'],
})
export class RequestsComponent implements OnInit {

  @HostBinding('class.projects-table') public readonly projectsTable = true;

  public tableHeader: string[] = [
    'User',
    'Vehicle Type',
    'Seat Capacity',
    'Request Location',
    'Time',
    '',
    '',

  ];

  public drivers =[
    {
      name:"Nima Yoezer",
      lat:27.477586 ,
      long:89.636292,
      contact_number: 17446623,
      status: "Free",
      status_short: 'free',
      vehicle: "Toyota Camry",
      vehicle_number:'BG-1-E1243'
    },
    {
      name:"Nima Yoezer",
      lat:27.458895, 
      long:89.650124 ,
      contact_number: 17446623,
      status_short: 'busy',
      status: "Dropping Dawa Dem to Upper Motithang",
      vehicle: "Toyota Camry",
      vehicle_number:'BG-1-E1243'
    },
    {
      name:"Nima Yoezer",
      lat:27.487878,
      long: 89.629001,
      contact_number: 17446623,
      status_short: 'busy',
      status: "picking up Pema Lhadron from UNDP head office",
      vehicle: "Toyota Camry",
      vehicle_number:'BG-1-E1243'
    }

  ]
  
  public data: object[] = [
    {
      user: 'Nima Tenzin',
      requestDetials: 
        {
          vehicelType:'Sedan',
          passengers: 2,
          pickupLocation: [27.500918, 89.639285],
          requestTime: '10:00 am'
        }
    },
    {
      user: 'Kinley Wangyal',
      requestDetials: 
        {
          vehicelType:'SUV',
          passengers: 4,
          pickupLocation: [27.500918, 89.639285],
          requestTime: '10:05 am'
        }
    },{
      user: 'Hem Bdr',
      requestDetials: 
        {
          vehicelType:'Mini',
          passengers: 1,
          pickupLocation: [27.500918, 89.639285],
          requestTime: '9:00 am'
        }
    },{
      user: 'Katherine',
      requestDetials: 
        {
          vehicelType:'Sedan',
          passengers: 1,
          pickupLocation: [27.500918, 89.639285],
          requestTime: '9:45 am'
    },
  }
  ];
  constructor() { }

  ngOnInit(): void {
   
  
  }

  flyTo(){
   var map = L.map('map')
   map.flyTo([27.500918, 89.639285])
  }

  assignDriver(){
    var dialog = document.querySelector('dialog');
    var showDialogButton = document.querySelector('#show-dialog');
    if (! dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);
    }
    dialog.showModal();
    showDialogButton.addEventListener('click', function() {
      dialog.showModal();
    });
    dialog.querySelector('.close').addEventListener('click', function() {
      dialog.close();
    });
  }

  

}
