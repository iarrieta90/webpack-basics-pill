export class ModuleB {

    constructor(){
        this.messageBox = $('.root');
        this.arrowMessage = () => this.messageBox.append("<h1>Message with arrow function</h1>")
    }

    printMessage_b () {
        this.messageBox.append('<h1>Message using jQuery</h1>');
    }

}