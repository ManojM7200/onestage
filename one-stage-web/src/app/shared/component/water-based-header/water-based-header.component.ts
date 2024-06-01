import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-water-based-header',
  templateUrl: './water-based-header.component.html',
  styleUrl: './water-based-header.component.scss'
})
export class WaterBasedHeaderComponent {
  @Input()title:string="";
}
