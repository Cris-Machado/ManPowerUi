import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { PointsService } from 'src/app/services/points/points.service';

@Component({
  selector: 'app-create-point',
  templateUrl: './create-point.component.html',
  styleUrls: ['./create-point.component.scss']
})
export class CreatePointComponent implements OnInit {
  createForm: FormGroup;
  pointTypes = [
    { value: 1, viewValue: 'Entrada' },
    { value: 2, viewValue: 'Almoço' },
    { value: 3, viewValue: 'Retorno do Almoço' },
    { value: 4, viewValue: 'Saída' }
  ];

  constructor(private formBuilder: FormBuilder, private pointsService: PointsService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.createForm = this.formBuilder.group({
      pointType: ['', Validators.required],
    });
  }

  submit(): void {
    if (this.createForm.valid) {
      var model = this.createForm.getRawValue();
      this.pointsService.createPoint(model)
      .subscribe(
        result => {
          this.snackBar.open('Ponto salvo com sucesso', 'Fechar', { duration: 3000 });
          this.router.navigate(["home"])
        },
        error => {
          console.log(error.error)
          this.snackBar.open(error.error, 'Fechar', { duration: 3000 });
        }
      )
    }
  }
}