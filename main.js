console.log("How to debug using chrome extension")
// Copy code from launch.json file to add configuration to the file you want to debug

// Can use the try-catch method
try {
  const domElement = document.getElementById("dynamicallyAddedElement");
  domElement.innerHTML = "I was added after the user clicked on a button.";
} catch (exception) {
  console.error("The dynamic element has not been added to the DOM yet.");
}
// The try/catch block allows your program to continue running, even if an error occurs. 
// This is because you are now giving instructions on what should happen if an error does occur. 
// Otherwise, the exception is unhandled and the program stops working.