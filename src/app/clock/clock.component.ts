import { Component, Input } from '@angular/core';
import { WeatherapiService } from '../weatherapi.service';

@Component({
  selector: 'app-clock',
  standalone: true,
  imports: [],
  templateUrl: './clock.component.html',
  providers:[WeatherapiService],
  styleUrl: './clock.component.css'
})
export class ClockComponent {
  title = 'Introuction to Angular';
  weatherService:WeatherapiService;
  temprature = "";

  constructor(weatherService:WeatherapiService){
    this.weatherService = weatherService;
  }



  @Input() count = 1;

  async getWeatherData(){
  const data= await  this.weatherService.getWeatherDataForNagpur();
  this.temprature = data;

}


}
