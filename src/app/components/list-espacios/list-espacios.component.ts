import { EspacioService } from './../../services/espacio.service';
import { Espacio } from './../../models/espacio';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list-espacios',
  templateUrl: './list-espacios.component.html',
  styleUrls: ['./list-espacios.component.css']
})
export class ListEspaciosComponent implements OnInit {
  displayedColumns: string[] = ['id', 'estacionamiento', 'piso', 'numero', 'estado', 'actions'];
  dataSource = new MatTableDataSource<Espacio>();
  constructor(private EspacioService: EspacioService,
    private snackBar:MatSnackBar) {}

  ngOnInit(): void {
    this.getEspacios();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getEspacios() {
    this.EspacioService.getEspacios().subscribe((data: Espacio[]) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

}
