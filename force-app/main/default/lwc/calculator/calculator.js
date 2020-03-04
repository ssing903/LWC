import { LightningElement,track } from 'lwc';

export default class Calculator extends LightningElement {
    
    @track number1;@track number2; @track number3;

    onNumberChange(event) {
        // Getting the input Field Name
        const inputFieldName = event.target.name;
        console.log(inputFieldName);
        if (inputFieldName === "Number 1") {
            //value of first number has changed, modifying the property value
            this.number1 = event.target.value;
          } else if(inputFieldName === "Number 2") {
            //value of second number has changed, modifying the property value
            this.number2 = event.target.value;
        }
    } 
    add () {
        //console.log(this.number1);
        this.number3 =   parseInt(this.number1) + parseInt(this.number2);
    }

    divide () {
        //console.log(this.number1);
        this.number3 =   parseInt(this.number1) / parseInt(this.number2);
    }

    subtract () {
        //console.log(this.number1);
        this.number3 =   parseInt(this.number1) - parseInt(this.number2);
    }

    multiply () {
        //console.log(this.number1)/
        this.number3 =   parseInt(this.number1) * parseInt(this.number2);
    }
}