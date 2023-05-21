import { Component, OnInit } from '@angular/core';
import { DataserviceService, data } from '../dataservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  brandData:any
  hide = false
  loading: boolean = true;
  constructor(private data: DataserviceService, private router: Router) { }

  ngOnInit(): void {
    this.data.getData().subscribe(res=>{
      this.brandData = res
      console.log(this.brandData)
      this.brandData = Object.values(this.brandData)
      this.brandData = this.brandData[0]
      console.log(this.brandData)
    })
  }
  userClick(){
    this.hide = true
  }
  paginate(e:any){
    window.scroll({
    top: 0,
    behavior: 'smooth',
});}
}
