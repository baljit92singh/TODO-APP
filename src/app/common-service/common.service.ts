import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }


  setItem(data) {
    localStorage.setItem("recentList", JSON.stringify(data));
  }

  getItem() {
    return JSON.parse(localStorage.getItem('recentList'))
  }
}
