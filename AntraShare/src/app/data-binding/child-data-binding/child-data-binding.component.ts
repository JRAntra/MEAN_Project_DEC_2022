import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-data-binding',
  templateUrl: './child-data-binding.component.html',
  styleUrls: ['./child-data-binding.component.scss']
})
export class ChildDataBindingComponent implements OnInit {

  constructor() { }
  @Input() color? : string
  @Output() changeValue  = new EventEmitter()

  ngOnInit(): void {
    alert('child recieved color :' + this.color)
  }
  submitInfo(){
    this.changeValue.emit('the child is triggered')
  }

}
