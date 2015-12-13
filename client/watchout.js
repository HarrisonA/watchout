// start slingin' some d3 here.
// var svg = document.createElementNS, "svg"

var currentScore = 0;
var collisions = 0;
var highScore = 0;


var numOfEnemies = 30;  // num of enemies to place on the screen
var randomNumArray =[];

//create an array. One random number for each element. 
for(var i = 0; i<numOfEnemies; i++){
  randomNumArray.push(randomNum());
} 

// our dragging function. detects clicks and drag movement.

var drag = d3.behavior.drag()
          .on ( 'dragstart', function(){player.style('fill', 'black'); })
          // player node follows mouse.
          .on ('drag', function() {player.attr('cx', d3.event.x)
                                         .attr('cy', d3.event.y); })
          .on ('dragend', function(){player.style('fill', 'black'); });



// create all circles
// selects our svg element in the dom 
d3.select('svg')
  
  // select every child circle within that svg element.
  .selectAll('circle')
  
  // if there are more elements in the randomNumArray than circle nodes on the page,
  // D3 will make up the difference with phantom-nodes;
  // we don't use the data in this situation.
  .data(randomNumArray)
  
  // enter and append attach the phantom nodes to the dom as bonafide circle nodes. 
  .enter()
  .append('circle')
  
  //  add svg attributes to all circle nodes
  .attr('cy', 1000)
  .attr('cx', 1000)
  .attr('r', 40)
  .attr('fill', 'red')
 
  // assign enemies
  .classed("enemies", true)

// select the svg element and the first circle within the svg.
var player = d3.select('svg').select('circle')  
  
  // remove enemy class and add player class.
  .classed("enemies", false)
  .classed("player", true)
  // player attributes
  .attr('cx', 100)
  .attr('cy', 100)

  // call drag function.
  .call(drag);

// function that generates a random number between 0 and sixty
function randomNum () { return Math.random() * 60;}

// get highscore, current score and collisions from the dom and assign them to variables
var $highScore = $(".high > span");
var $currentScore = $(".current > span");
var $collisions = $(".collisions > span");




// moves enemies to random locations every second( 1000 ms )
setInterval(function() {
  d3.selectAll('.enemies')
      .data(randomNumArray)    
      .transition().duration(1000)
      .attr("cx",function (d) {
        return d * randomNum()
      })
      .attr("cy",function (d) {
        return d * randomNum()
      });
 
}, 1000);




// detect collisions
var allenemies = d3.select('svg').selectAll('.enemies');
setInterval(function(){
  // loop through all enemies 
  for (var i = 0; i < allenemies[0].length; i++) {
    // check their distance from the player
    if((Math.abs(allenemies[0][i].cx.animVal.value - player[0][0].cx.animVal.value) <= 50 )&&
    (Math.abs(allenemies[0][i].cy.animVal.value - player[0][0].cy.animVal.value) <= 50)) {
    // if the distance is less than 50 pixels
    // increment the collision count
      collisions++;
      // update the collision span
      $collisions.text(collisions);
      // reset current score 
      currentScore = 0;

    }

  };
}, 100);




// Update scores every 250 ms
setInterval(function(){
  //increase the current score and update the current score span
  currentScore++;     
  $currentScore.text(currentScore);

  if(currentScore > highScore){
     highScore = currentScore;
     $highScore.text(currentScore);
  }
}, 250);

