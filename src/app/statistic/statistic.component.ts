import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent implements OnInit {
  recentList = [];
  categoryList = ['Personal', 'Work', 'Other'];
  statusList = [
    { status: 'Open', priority: 'High' },
    { status: 'Open', priority: 'Medium' },
    { status: 'Open', priority: 'Low' },
    { status: 'Complete', priority: 'High' },
    { status: 'Complete', priority: 'Medium' },
    { status: 'Complete', priority: 'Low' },
  ];
  constructor() { }
  personal;
  work;
  other;
  ngOnInit() {
    if (JSON.parse(localStorage.getItem('recentList'))) {
      this.recentList = JSON.parse(localStorage.getItem('recentList'))
      console.log(this.recentList);
    } else {
      console.log("there is noting in local storage.")
    }

    for (var i = 0; i < this.recentList.length; i++) {
      if (this.recentList[i].category === 'Personal') {
        // this.personal = this.recentList[i].length;
      }
    }
  }

}
