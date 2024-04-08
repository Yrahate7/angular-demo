import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'any'
})
export class WeatherapiService {

  constructor() { }

  async getWeatherDataForNagpur():Promise<string>{
    const result = await axios.get("https://api.openweathermap.org/data/3.0/onecall?lat=21.1458&lon=79.0882&appid=0021d8c24cc78e2be4f563bb4f97c68a");
    console.log(result);
    return "";
  }
}
