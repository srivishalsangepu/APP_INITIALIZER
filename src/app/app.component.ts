import { Component } from '@angular/core';
import { AppInitService } from './app-init.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'guardsproject';
  color: Promise<void>;

  constructor(public appinitservice: AppInitService, private http: HttpClient) {
    this.color = appinitservice.Init();
    console.log("After Loading Component");
  }
}
