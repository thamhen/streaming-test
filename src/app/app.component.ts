import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  result: any;
  menuOpened = false;
  filmes = '../assets/js/filmes.json'

  constructor(public http: HttpClient) {}

  ngOnInit() {
    console.log(this.result)
    this.http.get<any>(this.filmes).subscribe(res => {
      this.result = res;
    });
  }
  
}
