import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { FormGroup, FormControl, FormsModule, ReactiveFormsModule, AbstractControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

import { TransferService } from '../transfer.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {

  term: string;
  dataArray = [];

  to: AbstractControl;
  from: AbstractControl;
  departureDate: AbstractControl;
  returnDate: AbstractControl;
  passengerCount: AbstractControl;
  price: AbstractControl;

  flightData = new FormGroup({
  to: new FormControl(''),
  from: new FormControl(''),
  departureDate: new FormControl(''),
  returnDate: new FormControl(''),
  passengerCount: new FormControl(''),
  price: new FormControl('')
  });
  


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private data: TransferService) {

  }
  ngOnInit() {
    this.data.currentData.subscribe(message =>{
      
      this.dataArray = message
    });
  }

  process()
  {
    // console.log(this.flightData);
    
    this.dataArray.push(this.flightData.get('from').value);
    this.dataArray.push(this.flightData.get('to').value);
    this.dataArray.push(this.flightData.get('departureDate').value.toString());
    this.dataArray.push(this.flightData.get('returnDate').value.toString());
    this.dataArray.push(this.flightData.get('passengerCount').value);
    this.dataArray.push(this.flightData.get('price').value);
    
    // this.from = this.flightData.get('from');
    // this.to = this.flightData.get('to');
    // this.departureDate = this.flightData.get('departureDate');
    // this.returnDate = this.flightData.get('returnDate');
    // this.passengerCount = this.flightData.get('passengerCount');
    // this.price = this.flightData.get('price');
    
    // console.log(this.dataArray);
  }
}
