import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClockComponent } from './clock/clock.component';
import { CommonModule, NgFor } from '@angular/common';
import { WeatherapiService } from './weatherapi.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ClockComponent,CommonModule],
  providers:[WeatherapiService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Introuction to Angular';

  count: number[] = [];

   addElement(){
     this.count.push(this.count.length+1);
   }
}
