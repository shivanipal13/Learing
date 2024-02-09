// var elements; // Use a plural name since getElementsByClassName returns a collection
// elements = document.getElementsByClassName("nav-item");

// console.log(elements);

// // var element = document.getElementById("nw"); // Use a singular name for a single element
// // element.innerHTML="<a>hello</a>";
//  var element=document.querySelector(".practice").computedStyleMap.border;

// console.log(element);

// var element=document.getElementById("pra").onclick=abc;
// function abc(){
//     document.getElementById("pra").style.background="blue";


// }


// console.log(element);

var a=document.createElement("H2");
console.log(a);

var b=document.createTextNode("hello , this is textnode");
a.appendChild(b);
console.log(a.textContent);
// console.log(b.textContent);

// var newDiv = document.createElement("div");

// // Step 2: Set attributes and properties
// newDiv.textContent = "This is a new div!";
// console.log(newDiv.textContent);

var iHeight=window.innerHeight;
console.log(iHeight);

var oHeight=window.outerHeight;
console.log(oHeight);
