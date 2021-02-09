import { Injectable } from '@angular/core';

@Injectable()
export class TodoListService {
  public getItems(): object[] {
    return [
      {
        title: 'Dorji Sonam Requesting pickup',
        id: 1651644545,
        completed: false,
      },
      {
        title: 'Katherine Requesting schedule pickup',
        id: 1651646545,
        completed: false,
      },
      {
        title: 'Bob Requesting pickup',
        id: 5451646545,
        completed: true,
      }
    ];
  }
}
