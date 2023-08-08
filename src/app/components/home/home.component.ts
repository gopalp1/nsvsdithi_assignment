import { Component } from '@angular/core';
import { drug1 } from 'src/app/drug1';
import { drug2 } from 'src/app/drug2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  list:any=drug1;
  selectedForm ='drug1';
  constructor(
    private router: Router,

  ){}

  // onchange of form selection
  onChange(data:any){
      this.list = data.value == 'drug1' ? drug1 : drug2;
  }
  add(){
    this.router.navigate(['search']);

  }
}
