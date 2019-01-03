import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  result = '';

  constructor(private http: HttpClient, private appService: AppService) {
  }

  sayHello(): void {
    this.result = 'loading...';
    this
      .appService
      .sayHello()
      .subscribe();
  }
}
