import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {


  url:string = 'http://loiane.com';
  a: boolean = true;
  

  getValor(){ 

return 2;
  }
  getTrue() {
  return true;
}
  constructor() { }

  ngOnInit() {
  }

}