export class ModuleA {

    constructor(){
        this.messageBox = $('.root');
    }

    printMessage_a1 () {
        this.messageBox.append(`<h1>Message with let and template string</h1>`);
    } 

    printMessage_a2 () {
        this.messageBox.append('<h1>Message with const and template string</h1>');
    } 
    

}

