import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
  host: {
    ngSkipHydration: 'true',
  },
})
export class Header {}
