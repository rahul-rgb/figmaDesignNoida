import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashborad',
  templateUrl: './dashborad.component.html',
  styleUrls: ['./dashborad.component.css']
})
export class DashboradComponent implements OnInit {
  hide = false
  constructor() { }

  ngOnInit(): void {
  }
  userClick(){
    this.hide = true
  }
}
