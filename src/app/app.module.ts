import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { AppInitService } from './app-init.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AppInitService,{provide: APP_INITIALIZER,useFactory:initAPPservice,deps:[AppInitService],multi:true},{
    provide: APP_INITIALIZER,
    useFactory: initApp,
    multi: true,
    deps:[HttpClient]
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function initApp(http: HttpClient) {
  return () => {
    return http.get('http://localhost:3000/colors')
      .toPromise()
      .then((resp) => {
        console.log('Colors from API - ', resp);
      });
  };
}
export function initAPPservice(appinitservice:AppInitService){
  return (): Promise<any> => { 
    return appinitservice.Init();
  }
//return this.appinitservice.Init();
}