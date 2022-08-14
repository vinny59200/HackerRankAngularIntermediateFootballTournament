import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs/operators";

interface Competition {
  name: string;
  country: string;
  year: number;
  winner: string;
  runnerup: string;
}

interface ApiResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Competition[];
}

@Component({
  selector: 'football-competitions',
  templateUrl: './footballCompetitions.component.html',
  styleUrls: ['./footballCompetitions.component.scss']
})
export class FootballCompetitions implements OnInit {

  constructor(private http: HttpClient) {
  }

  ngOnInit() {

  }

}
