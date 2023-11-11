import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  widthPage: number = 0

  ngOnInit() {
    this.widthPage = window.innerWidth
  }

  @HostListener('window:resize', ['$event']) onResize(event) {
    this.widthPage = window.innerWidth;
  }

}
