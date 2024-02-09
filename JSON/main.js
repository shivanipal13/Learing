



var a = {
    "name": "shivani",
    "lastname": "Pal",
    "Mobile": 1234342343,
    "city": "mumbai",
    "Course": ["css", "js", "java"],
    "Adress": {
        "Area": "xyz",
        "pin": 123213
    }
};

var Name=a.name;
console.log(Name);
var obj = document.getElementById("demo");
obj.innerHTML =Name; // or obj.innerHTML = '' + a.name;

var b ={
    "name": "shivani",
    "lastname": "Pal",
    "Mobile": 1234342343,
    "city": "mumbai",
    "Course": ["css", "js", "java"],
    "Adress": {
        "Area": "xyz",
        "pin": 123213
    }
};




var x=b.name;
var y=document.getElementById("demo1").innerHTML=x;

const myJSON = '{"name":"John", "age":30, "car":null}';
const myObj = JSON.parse(myJSON);

let text = "";
for (const x in myObj) {
//   text += x + ", ";
//   text += x + ": " + myObj[x] + ", ";
text += myObj[x] + ", ";
}
document.getElementById("demo").innerHTML = text;
