function myFunction() {
    var text;

    // get the value of the input field with id= "numb"
    var x = document.getElementById("num1").value;
    // conver the string into interger
    // var x= parseInt (x,10)

    var y= document.getElementById("num2").value;
    // var y= parseInt (y,10)

    // if x is not a number or x<2 or x>100; same as y
    if(isNaN(x) || isNaN(y)){
        // what is the message
        text = "Number 1 input "+ x + " is not a valid number"
        // show the message in the web
        document.getElementById('demo').innerHTML = text;
        // style the message in js
        document.getElementById('demo').style.fontSize = "15px";
        document.getElementById("demo").style.color = "red";
        document.getElementById('demo').style.marginLeft ="25px"
        // have these lines because there are two line that we want to print
        text="Number 2 input "+ y + " is not a valid number";
        document.getElementById("demo2").innerHTML = text;
        document.getElementById('demo2').style.fontSize = "15px";
        document.getElementById("demo2").style.color = "red";
        document.getElementById('demo2').style.marginLeft ="25px"

    } else if ((x<=100 || x>=2) || (isNaN(y) || y<2 || y>100)){
        text = "Number 2 input "+ y+" is not in the range of 2 and 100 "
        // show the message in the web
        document.getElementById('demo').innerHTML = text;
        // style the message in js
        document.getElementById('demo').style.fontSize = "15px";
        document.getElementById("demo").style.color = "red";
        document.getElementById('demo').style.marginLeft ="25px"
        text='';
        document.getElementById("demo2").innerHTML = text;

    }else if(isNaN(x) || (isNaN(y) || y<2 || y>100)){
        text = "Number 1 input "+ x + " is not a valid number"
        // show the message in the web
        document.getElementById('demo').innerHTML = text;
        // style the message in js
        document.getElementById('demo').style.fontSize = "15px";
        document.getElementById("demo").style.color = "red";
        document.getElementById('demo').style.marginLeft ="25px"
        // have these lines because there are two line that we want to print
        text="Number 2 input "+ y + " is not in the range of 2 and 100";
        document.getElementById("demo2").innerHTML = text;
        document.getElementById('demo2').style.fontSize = "15px";
        document.getElementById("demo2").style.color = "red";
        document.getElementById('demo2').style.marginLeft ="25px"
    }

    }
    
    
    // ((x<=100 || x>=2) || (x<=100 || x>=2) { 

    // }
