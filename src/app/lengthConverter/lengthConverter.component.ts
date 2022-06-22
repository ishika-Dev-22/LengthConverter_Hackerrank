
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'length-converter',
  templateUrl: './lengthConverter.component.html',
  styleUrls: ['./lengthConverter.component.scss']
})
export class LengthConverter implements OnInit {
  obj = {
    firstInput: null,
    secondInput: null,
    unitF: "",
    unitS: "",

  };
  lengthOptions = [
    {
      id: 0,
      label: 'Kilometre',
      unit: 'km'
    },
    {
      id: 1,
      label: 'Metre',
      unit: 'm'
    },
    {
      id: 2,
      label: 'Centimetre',
      unit: 'cm'
    }
  ];

  ngOnInit() {
    this.obj.unitF = "km";
    this.obj.unitS = "m";
  }
  onChangeFirstUnit(dropdownSelected: any, val: any): void {
    this.lengthOptions.forEach(element => {
      if (element.id == dropdownSelected) {
        this.obj.unitF = element.unit;
        this.convert(val, false ,false, true,false);
      }
    });
  }
  onChangeSecondUnit(dropdownSelected: any, val: any): void {
    this.lengthOptions.forEach(element => {
      if (element.id == dropdownSelected) {
        this.obj.unitS = element.unit;
        this.convert(val, false ,false,false, true);
      }
    });
  }

  convert(value: number, firstInput: any, secondInput: any, dropdown1:any, dropdown2: any): void {
    if (firstInput) {
      console.log("first input changed");
      console.log(this.obj);
      if (this.obj.unitF == "km") {
        if (this.obj.unitS == "m") {
          this.obj.secondInput = value * 1000;
        }
        else if (this.obj.unitS == "cm") {
          this.obj.secondInput = value * 100000;
        }
        else {
          this.obj.secondInput = this.obj.firstInput;
        }
      }
      if (this.obj.unitF == "m") {
        if (this.obj.unitS == "km") {
          this.obj.secondInput = value / 1000;
        }
        else if (this.obj.unitS == "cm") {
          this.obj.secondInput = value * 100;
        }
        else {
          this.obj.secondInput = this.obj.firstInput;
        }

      }
      if (this.obj.unitF == "cm") {
        if (this.obj.unitS == "m") {
          this.obj.secondInput = value / 100;
        }
        else if (this.obj.unitS == "km") {
          this.obj.secondInput = value / 100000;
        }
        else {
          this.obj.secondInput = this.obj.firstInput;
        }
      }
    }
    if(secondInput){
      console.log("second input changed");
      console.log(this.obj);
      if (this.obj.unitS == "km") {
        if (this.obj.unitF == "m") {
          this.obj.firstInput = value * 1000;
        }
        else if (this.obj.unitF == "cm") {
          this.obj.firstInput = value * 100000;
        }
        else {
          this.obj.firstInput = this.obj.secondInput;
        }
      }
      if (this.obj.unitS == "m") {
        if (this.obj.unitF == "km") {
          this.obj.firstInput = value / 1000;
        }
        else if (this.obj.unitF == "cm") {
          this.obj.firstInput = value * 100;
        }
        else {
          this.obj.firstInput = this.obj.secondInput;
        }

      }
      if (this.obj.unitS == "cm") {
        if (this.obj.unitF == "m") {
          this.obj.firstInput = value / 100;
        }
        else if (this.obj.unitF == "km") {
          this.obj.firstInput = value / 100000;
        }
        else {
          this.obj.firstInput = this.obj.secondInput;
        }
      }
    }
    if(dropdown1){
      console.log("dropdown1 changed");
      if (this.obj.unitF == "cm") {
        if (this.obj.unitS == "m") {
          if(this.obj.firstInput!=null)
          this.obj.firstInput= this.obj.secondInput*100;
        }
        else if (this.obj.unitS == "km") {
          this.obj.firstInput = this.obj.secondInput* 100000;
        }
        else {
          this.obj.firstInput = this.obj.secondInput;
        }

      }
      if (this.obj.unitF == "km") {
        if (this.obj.unitS == "m") {
          this.obj.firstInput = this.obj.secondInput/1000;
        }
        else if (this.obj.unitS == "cm") {
          this.obj.firstInput = this.obj.secondInput/100000;
        }
        else {
          this.obj.firstInput = this.obj.secondInput;
        }
      }
      if (this.obj.unitF == "m") {
        if (this.obj.unitS == "km") {
          this.obj.firstInput = this.obj.secondInput* 1000;
        }
        else if (this.obj.unitS == "cm") {
          this.obj.firstInput = this.obj.secondInput / 100;
        }
        else {
          this.obj.firstInput = this.obj.secondInput;
        }

      }
    }
    if(dropdown2){
      console.log("dropdown2 changed");
      if (this.obj.unitS == "cm") {
        if (this.obj.unitF == "m") {
          if(this.obj.secondInput!=null)
          this.obj.secondInput= this.obj.firstInput*100;
        }
        else if (this.obj.unitF == "km") {
          this.obj.secondInput = this.obj.firstInput* 100000;
        }
        else {
          this.obj.secondInput = this.obj.firstInput;
        }

      }
      if (this.obj.unitS == "km") {
        if (this.obj.unitF == "m") {
          this.obj.secondInput = this.obj.firstInput/1000;
        }
        else if (this.obj.unitF == "cm") {
          this.obj.secondInput = this.obj.firstInput/100000;
        }
        else {
          this.obj.secondInput = this.obj.firstInput;
        }
      }
      if (this.obj.unitS == "m") {
        if (this.obj.unitF == "km") {
          this.obj.secondInput = this.obj.firstInput* 1000;
        }
        else if (this.obj.unitF == "cm") {
          this.obj.secondInput = this.obj.firstInput / 100;
        }
        else {
          this.obj.secondInput = this.obj.firstInput;
        }

      }
    }
  }
}
