import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() menuTogle: EventEmitter<boolean> = new EventEmitter;

  @Input() opened = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.opened = !this.opened;
    this.menuTogle.emit(this.opened);
  }

}
