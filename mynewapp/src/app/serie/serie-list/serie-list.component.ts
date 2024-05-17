import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css']
})
export class SerieListComponent implements OnInit {

  series: Array<Serie> = [];
  averageSeasons: number = 0;
  selectedSerie?: Serie;

  constructor(private serieService: SerieService) { }

  getSeries(): void {
    this.serieService.getSeries().subscribe((series) => {
    this.series = series;
    this.calculateAverageSeasons();
    });
  }

  calculateAverageSeasons() {
    let totalSeasons = 0;
    for (let serie of this.series) {
      totalSeasons += serie.seasons;
    }
    this.averageSeasons = this.series.length > 0 ? totalSeasons / this.series.length : 0;
  }


  selectSerie(serie: Serie): void {
    this.selectedSerie = serie;
  }

  ngOnInit() {
    this.getSeries();
  }

}
