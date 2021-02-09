import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ThemeModule } from 'theme';

import { CotoneasterCardComponent } from './cotoneaster-card';
import { DashboardComponent } from './dashboard.component';
import { LineChartComponent } from './line-chart';
import { PieChartComponent } from './pie-chart';
import { RobotCardComponent } from './robot-card';
import { TableCardComponent } from './table-card';
import { TodoListComponent } from './todo-list';
import { TrendingComponent } from './trending';
import { WeatherComponent } from './weather';
import { MapComponent } from './map/map.component';
import { RequestsComponent } from './requests/requests.component';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    FormsModule,
  ],
  declarations: [
    DashboardComponent,
    LineChartComponent,
    PieChartComponent,
    WeatherComponent,
    CotoneasterCardComponent,
    TableCardComponent,
    RobotCardComponent,
    TodoListComponent,
    TrendingComponent,
    MapComponent,
    RequestsComponent,
  ],
  exports: [
    WeatherComponent,
    TrendingComponent,
  ],
})
export class DashboardModule { }
