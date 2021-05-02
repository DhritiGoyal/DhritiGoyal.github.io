var color1 = [240, 244, 0];
var color2 = [10, 0, 107];
var delta = []
delta.push(color2[0]-color1[0]);
delta.push(color2[1]-color1[1]);
delta.push(color2[2]-color1[2]);
var current = 0 
window.addEventListener("wheel", function(){
  current = current + event.deltaY
  let change = current/15000
  if (change <= 1){
    let colorvals = []
    colorvals.push(color1[0] + delta[0] * change)
    colorvals.push(color1[1] + delta[1] * change)
    colorvals.push(color1[2] + delta[2] * change)
    document.querySelector(".background").style.backgroundColor = `rgb(${colorvals[0]}, ${colorvals[1]}, ${colorvals[2]})`
  }
});

// rgb(240, 244, 0)
// rgb(10, 0, 107)


