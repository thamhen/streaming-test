import { HttpClient } from '@angular/common/http';import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-list-titles',
  templateUrl: './list-titles.component.html',
  styleUrls: ['./list-titles.component.scss']
})
export class ListTitlesComponent implements OnInit {
  filmes = '../assets/js/filmes.json'
  result: any;

  constructor() {}

  ngOnInit(): void {

  }


}
