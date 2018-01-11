 // Define a Function
 function sayOuch() {
 	alert('Ouch! Stop poking me!');
 }

 function sayWoof () {
 	alert ('Woof!'):
 }
 
 // Use a CSS selector to identify an element
 var foxImage = document.querySelector('#foxpic');
 
 // Assign the function to the onclick event on that element
 foxImage.onclick = sayOuch;