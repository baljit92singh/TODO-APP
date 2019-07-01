import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { CommonService } from '../common-service/common.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  title = 'create-update-delete';
  taskForm: FormGroup;
  recentList = [];
  mode: string = 'new';
  priorityList = ['High', 'Medium', 'Low'];
  categoryList = ['Personal', 'Work', 'Other'];
  statusList = ['Open', 'Complete'];
  constructor(private fb: FormBuilder,
    public snackBar: MatSnackBar,
    public commonService: CommonService) {
    this.loadForm();
  }
  loadForm() {
    this.taskForm = this.fb.group({
      id: '',
      tittle: '',
      description: '',
      priority: '',
      category: '',
      status: '',
      createdDate: new Date()
    })
  }
  id = 0;
  saveContact() {
    for (let i = 0; i < this.recentList.length; i++) {
      this.id = this.recentList[i].id
    }
    let item = {
      id: this.id + 1,
      tittle: this.taskForm.controls['tittle'].value,
      description: this.taskForm.controls['description'].value,
      priority: this.taskForm.controls['priority'].value,
      category: this.taskForm.controls['category'].value,
      status: this.taskForm.controls['status'].value,
      createdDate: new Date()
    }
    this.recentList.push(item);
    this.commonService.setItem(this.recentList)
    this.resetForm();
    var message = "Task created successfully"
    this.snackBar.open(message, "Dismiss", {
      duration: 2000,
    });
  }

  updateContact() {
    this.recentList.splice(this.indexUpdate, 1);
    let item = {
      id: this.taskForm.controls['id'].value,
      tittle: this.taskForm.controls['tittle'].value,
      description: this.taskForm.controls['description'].value,
      priority: this.taskForm.controls['priority'].value,
      category: this.taskForm.controls['category'].value,
      status: this.taskForm.controls['status'].value,
      createdDate: new Date()
    }
    this.recentList.push(item);
    this.commonService.setItem(this.recentList)
    this.resetForm();
    var message = "Task update successfully"
    this.snackBar.open(message, "Dismiss", {
      duration: 2000,
    });
    this.mode = 'new';
  }
  resetForm() {
    this.taskForm.reset();
  }

  indexUpdate: number;
  editContact(item) {
    this.mode = 'edit';
    this.indexUpdate = this.recentList.indexOf(item)
    console.log(item);
    this.taskForm.controls['id'].setValue(item.id);
    this.taskForm.controls['tittle'].setValue(item.tittle);
    this.taskForm.controls['description'].setValue(item.description);
    this.taskForm.controls['priority'].setValue(item.priority);
    this.taskForm.controls['category'].setValue(item.category);
    this.taskForm.controls['status'].setValue(item.status);
    this.taskForm.controls['createdDate'].setValue(item.createdDate);
  }

  deleteContact(item) {
    console.log(item);
    this.recentList.splice(this.recentList.indexOf(item), 1);
    this.commonService.setItem(this.recentList)
    var message = "Task delete successfully"
    this.snackBar.open(message, "Dismiss", {
      duration: 2000,
    });
  }

  ngOnInit() {
    if (JSON.parse(localStorage.getItem('recentList'))) {
      this.recentList = JSON.parse(localStorage.getItem('recentList'))
    } else {
      console.log("there is noting in local storage.")
    }
  }

}
