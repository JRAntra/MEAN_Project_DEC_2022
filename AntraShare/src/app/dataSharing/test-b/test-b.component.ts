import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataSharingService } from '../data-sharing.service';
@Component({
  selector: 'app-test-b',
  templateUrl: './test-b.component.html',
  styleUrls: ['./test-b.component.scss']
})
export class TestBComponent implements OnInit {

  constructor(private dataSharing: DataSharingService) { }

  username:FormControl = new FormControl('')

  ngOnInit(): void {
    this.dataSharing.sharedData.subscribe(res=>{
      this.username.setValue(res);
    })
  }

}
