import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { filter, tap } from "rxjs/operators";

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
  private apiurl = "https://jsonmock.hackerrank.com/api/football_competitions?page=";
  total: number;
  items: number[];
  statements: string[];
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get(this.apiurl + 1).subscribe((filteredResult: ApiResponse) => {
      console.log(filteredResult);
      this.total = filteredResult.total_pages;
      this.items = Array.from(Array(this.total).keys())
      // this.doFetch(-1);
    });
  }

  doFetch(i: number) {
    this.statements = [];
    console.log("fetch " + i)
    this.http.get(this.apiurl + (i+1)).subscribe((filteredResult: ApiResponse) => {
      let array = filteredResult.data;
      for (let i = 0; i < array.length; i++) {
        this.statements.push('Competition ' + array[i].name + ' won by ' + array[i].winner + ' in year ' + array[i].year)
      }
      console.log(this.statements)
    });
  }

}
