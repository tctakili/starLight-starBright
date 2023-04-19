//creates a trail of temporary stars when mouse is dragged across screen! 

let walker = [];

let lifespan = 120;
//max no. walkers can move
let maxWalkers = 5

let palette = ['#D68BFFBFS',//light skyblue
              '#FFEFA2',//bright
              '#69CCFF',//blue
              '#A9A1F6',// p
              '#F6FFA5',//yellow
              '#FFFFFF']; //white

let c1,c2;

function setup() {
  //current window size as canvas
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  c1 = color('#092658'); //darkpurple
  c2 = color('#4131A7'); //sunset
  
  for(let y=0; y<height; y++){
    n = map(y,0,height,0,1);
    let newc = lerpColor(c1,c2,n);
    stroke(newc);
    line(0,y,width, y);
}
  if (mouseIsPressed){
    
    let randomColor = palette[int(random(palette.length))];
    
    let r = {
      x: mouseX,
      y: mouseY,
      age: 0,
      color : randomColor
    }
    
    walker.push(r);
  }
   for (let i = 0; i < walker.length; i++) {
     
    //spread fx
    walker[i].x += random(-maxWalkers, maxWalkers);
    walker[i].y += random(-maxWalkers, maxWalkers);
     
     //listed colors
     fill(walker[i].color);
     //size of star
     let area = map(walker[i].age, 0, lifespan, 12, 0);
     //shape of star
     noStroke();
     ellipse(walker[i].x, walker[i].y, area, area);
     
     walker[i].age++;
      if (walker[i].age > lifespan) {
      
      walker.splice(i, 1);
    }
  }
     
}
function windowResized (){
  resizeCanvas(windowWidth,windowHeight);
}
