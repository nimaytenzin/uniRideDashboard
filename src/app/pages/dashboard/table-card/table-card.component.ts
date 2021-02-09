import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-table-card',
  styleUrls: ['./table-card.component.scss'],
  templateUrl: './table-card.component.html',
})
export class TableCardComponent {
  @HostBinding('class.projects-table') public readonly projectsTable = true;

  public tableHeader: string[] = [
    'Driver',
    'Vehicle',
    'Status',
    'Contact',
    'Status',
  ];
  public data: object[] = [
   
    {
      project: 'Dorji Khandu',
      responsible: [
        {
          color: 'color--light-blue',
          name: 'available',
        }
      ],
      email: '17263764',
      deadline: 'BG-2A-1002 | Honda City',
      progress: 100,
      isSelected: false,
    },
    {
      project: 'Kuenzang',
      responsible: [
        {
          color: 'color--light-blue',
          name: 'available',
        }
      ],
      email: '17263764',
      deadline: 'BG-2A-1002 | Toyota Hilux',
      progress: 100,
      isSelected: false,
    },
    {
      project: 'Kinley Wangyal',
      responsible: [
        {
          color: 'color--orange',
          name: 'Dropping Katherine',
        },
      ],
      email: '77854854',
      deadline: 'BG-1-3001 | Toyota Camry',
      progress: 14,
      isSelected: true,
    },
    {
      project: 'Sonam Eden',
      responsible: [
        {
          color: 'color--orange',
          name: 'Dropping Nima Tenzin',
        },
      ],
      email: '17558845',
      deadline: 'BG-1A-3341 | Toyota Prado',
      progress: 90,
      isSelected: false,
    },
    {
      project: 'Hem Bdr',
      responsible: [
        {
          color: 'background-color--secondary',
          name: 'Not Avialable',
        },
      ],
      email: '17555584',
      deadline: 'BG-1A-3341 | Toyota Prado',
      progress: 0,
      isSelected: false,
    },
  ];
}
