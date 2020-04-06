function printMessage() {
    var msg = "Hello Doug";
    msg += "!";
    console.log(msg);
    alert(msg);
}
function getData() {
    document.getElementById("text-location").innerHTML = "hi there";    
}
function logTxtToConsole() {
    var msg = "working";
    console.log(msg);
    var msg2 = document.getElementById("usernamefield").value;
    console.log(msg2);
}

class Square {
    constructor(length) {
        this.edgeLength = length;
    }
    getLength(){
        console.log(this.edgeLength);
    }
    getArea(){
        var area = this.edgeLength*this.edgeLength
        console.log(area)
    }
}
var mySquarea = new Square(5);
var mySquareb = new Square(10);

mySquarea.getLength();
mySquarea.getArea();

mySquareb.getLength();
mySquareb.getArea();

function update() {
    var selectedcolor = document.getElementById("color").value;
    console.log(selectedcolor);
    document.body.style.background = selectedcolor;
}
