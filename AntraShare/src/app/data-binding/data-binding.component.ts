import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  // firstname: FormControl = new FormControl('JR')
  // lastname: FormControl = new FormControl('Zhang')
  
  // nameField: FormGroup = new FormGroup({
  //   firstname: new FormControl('JR'),
  //   lastname: new FormControl('Zhang')
  // })

  nameField : FormGroup = new FormGroup({})
  jobs: FormGroup = new FormGroup({})
  childColor: string = 'red'
  constructor(private fb: FormBuilder) {

   }

  name: string = ''
  ngOnInit(): void {

    this.nameField = this.fb.group({
      firstname: 'JR',
      lastname:'Zhang',
      contacts: this.fb.group({
        phoneNum: '00000000000',
        address:'Sterling'
      }),
      career: this.fb.array(
      [
        this.jobs = this.fb.group({
               
          title: 'web developer',
          period: this.fb.group({
            
          })
        
        })
  
      ]
      )
    })

    this.name = 'JR'
    this.nameField.get('firstname')?.setValue('David')
    console.log(this.nameField)

  }

  displayValue() {
    console.log(this.nameField)
    // this.firstname.valueChanges.subscribe
  }
  clearValue(){
    this.name = 'cleared'
  }
  submitForms(){

  }

  get firstname(): FormControl{
    return this.nameField.get('firstname') as FormControl
  }


  childTextUpdated(event:Event){
    console.log(event)
    alert(event)
  }

}
