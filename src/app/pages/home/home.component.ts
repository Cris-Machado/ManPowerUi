import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PointModel } from 'src/app/models/pointModel';
import { PointsService } from 'src/app/services/points/points.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  points: PointModel[];
  displayedColumns: string[] = ['pointType', 'date', 'hour'];
  constructor(private pointService: PointsService, private router: Router) { }

  ngOnInit(): void {
    this.listPoints();
  }

  listPoints(): void {
   this.pointService.getListPoints()
    .subscribe(
      result => {
        this.points = result
      }
    );
  }

  goToCreate(): void {
    this.router.navigate(['create']);
  }

  getPointTypeDescription(pointType: number): string {
    if (pointType === 1) {
      return 'Entrada';
    } else if (pointType === 2) {
      return 'Almoço';
    } else if (pointType === 3) {
      return 'Retorno do Almoço';
    } else if (pointType === 4) {
      return 'Saída';
    } else {
      return 'N/A';
    }
  }
}
