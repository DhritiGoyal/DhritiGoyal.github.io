let myCursor =
document.querySelector("#customCursor");

window.addEventListener("mousemove", function(event)
  {
  console.log(event);
  console.log("X: ");
  console.log(event.pageX);
  console.log("Y: ");
  console.log(event.pageY);
  myCursor.style.top = (event.pageY - 12.5) + "px";
  myCursor.style.left = (event.pageX - 12.5)+ "px";
});


function pageScroll() {
    	window.scroll(0,16420);
      window.onbeforeunload = function(){ 	
      window.scrollTo(0,16420);
}}

function myFunction() {
  var x = document.createElement("INPUT");
  x.setAttribute("type", "text");
  x.setAttribute("value", "Hello World!");
  document.body.appendChild(x);
} 


 document.getElementById("txt_1").value = getSavedValue("txt_1");    // set the value to this input
        document.getElementById("txt_2").value = getSavedValue("txt_2"); // set the value to this input
        document.getElementById("txt_3").value = getSavedValue("txt_3");   
/* Here you can add more inputs to set value. if it's saved */

        //Save the value function - save it to localStorage as (ID, VALUE)
        function saveValue(e){
            var id = e.id;  // get the sender's id to save it . 
            var val = e.value; // get the value. 
            localStorage.setItem(id, val);// Every time user writing something, the localStorage's value will override . 
        }

        //get the saved value function - return the value of "v" from localStorage. 
        function getSavedValue  (v){
            if (!localStorage.getItem(v)) {
                return "";// You can change this to your defualt value. 
            }
            return localStorage.getItem(v);
        }

