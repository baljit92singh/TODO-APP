import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent implements OnInit {
  recentList = [];
  categoryList: { category: string; count: number; }[];
  statusList: { status: string; priority: string; count: number; }[];
  constructor() { }
  personal;
  work;
  other;
  openHigh;
  openMedium;
  openLow;
  completeHigh;
  completeMedium;
  completeLow;
  ngOnInit() {
    if (JSON.parse(localStorage.getItem('recentList'))) {
      this.recentList = JSON.parse(localStorage.getItem('recentList'))
      console.log(this.recentList);
    } else {
      console.log("there is noting in local storage.")
    }
    var personalList = [];
    var workList = [];
    var otherList = [];
    for (var i = 0; i < this.recentList.length; i++) {
      console.log(this.recentList.length);
      if (this.recentList[i].category === 'Personal') {
        personalList.push(this.recentList[i]);
        this.personal = personalList.length;
      } else if (this.recentList[i].category === 'Work') {
        workList.push(this.recentList[i]);
        this.work = workList.length;
      } else if (this.recentList[i].category === 'Other') {
        otherList.push(this.recentList[i]);
        this.other = otherList.length;
      }
    }
    this.categoryList = [
      { category: 'Personal', count: this.personal ? this.personal : 0 },
      { category: 'Work', count: this.work ? this.work : 0 },
      { category: 'Other', count: this.other ? this.other : 0 }
    ];
    var openHighList = [];
    var openMediumList = [];
    var openLowList = [];
    var completeHighList = [];
    var completeMediumList = [];
    var completeLowList = [];
    for (var i = 0; i < this.recentList.length; i++) {
      console.log(this.recentList.length);
      if (this.recentList[i].status === 'Open' && this.recentList[i].priority === 'High') {
        openHighList.push(this.recentList[i]);
        this.openHigh = openHighList.length;
      } else if (this.recentList[i].status === 'Open' && this.recentList[i].priority === 'Medium') {
        openMediumList.push(this.recentList[i]);
        this.openMedium = openMediumList.length;
      } else if (this.recentList[i].status === 'Open' && this.recentList[i].priority === 'Low') {
        openLowList.push(this.recentList[i]);
        this.openLow = openLowList.length;
      } else if (this.recentList[i].status === 'Complete' && this.recentList[i].priority === 'High') {
        completeHighList.push(this.recentList[i]);
        this.completeHigh = completeHighList.length;
      } else if (this.recentList[i].status === 'Complete' && this.recentList[i].priority === 'Medium') {
        completeMediumList.push(this.recentList[i]);
        this.completeMedium = completeMediumList.length;
      } else if (this.recentList[i].status === 'Complete' && this.recentList[i].priority === 'Low') {
        completeLowList.push(this.recentList[i]);
        this.completeLow = completeLowList.length;
      }
    }
    this.statusList = [
      { status: 'Open', priority: 'High', count: this.openHigh ? this.openHigh : 0 },
      { status: 'Open', priority: 'Medium', count: this.openMedium ? this.openMedium : 0 },
      { status: 'Open', priority: 'Low', count: this.openLow ? this.openLow : 0 },
      { status: 'Complete', priority: 'High', count: this.completeHigh ? this.completeHigh : 0 },
      { status: 'Complete', priority: 'Medium', count: this.completeMedium ? this.completeMedium : 0 },
      { status: 'Complete', priority: 'Low', count: this.completeLow ? this.completeLow : 0 },
    ];
  }

}
