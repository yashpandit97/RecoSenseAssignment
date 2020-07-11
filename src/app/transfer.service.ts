import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AbstractControl } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TransferService {

  private dataSource = new BehaviorSubject([]);
  currentData = this.dataSource.asObservable();

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get('./assets/data.json');
  }

}
