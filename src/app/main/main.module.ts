import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { RouterModule } from '@angular/router';;

const routes=[
  {path:'',redirectTo:'home', pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'services',component:ServicesComponent}
];

@NgModule({
  declarations: [ HomeComponent, ServicesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class MainModule { }
