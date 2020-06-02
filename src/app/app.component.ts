import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private formBuilder: FormBuilder){}

  task4Form: FormGroup;

  // what value user enter via input
  enteredAmount: number;

  // value of this variable is our final result
  result;

  // getter, we use this in our app.component.html file
  get numbers (){
    return this.task4Form.get('numbers');
  }

  // here i get form value
  ngOnInit(){
    this.task4Form = this.formBuilder.group({
      numbers: ['',[Validators.required]]
    })
  }
  
  // all my solution in this here
  onFindStrips(){
    this.result = null;
    let len: number = 3;

    // assing value which we get from input
    this.enteredAmount = +this.task4Form.value.numbers;

    // always reset our input
    this.task4Form.reset();  

    console.log(this.result = Math.log2(this.enteredAmount));
    
    this.result = Math.round(Math.log2(this.enteredAmount));

    }
  }



