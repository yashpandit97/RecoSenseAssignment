import { Component, OnInit } from '@angular/core';
import { FilterPipe } from '../filter.pipe';
import { TransferService } from '../transfer.service';


@Component({
  selector: 'app-flightsearch',
  templateUrl: './flightsearch.component.html',
  styleUrls: ['./flightsearch.component.css'],
})
export class FlightsearchComponent implements OnInit {

  term: string;
  message: string;
  price: number;
  searchdata = [];
  list: any;
  
  constructor(private data: TransferService) { }

  ngOnInit(): void {
    this.data.currentData.subscribe(message => this.searchdata = message);
    console.log(this.searchdata);
    this.data.getProducts().subscribe(message => {
      this.list = message
      console.log(this.list);
    });
    // this.term = this.list.filter(this.searchdata.values);

  }

}
