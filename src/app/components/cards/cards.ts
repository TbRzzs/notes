import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  imports: [NgFor],
  templateUrl: './cards.html',
  styleUrl: './cards.css',
})
export class Cards {
  @Input() planTag = 'Starter Plan';
  @Input() title = 'ARCHITECT';
  @Input() price = 'FREE';
  @Input() priceSuffix = '/forever';
  @Input() benefits: string[] = [
    'Personal editorial editor',
    'Up to 3 project archives',
    'Basic tonal typography',
  ];
  @Input() buttonLabel = 'Get Started';
}
