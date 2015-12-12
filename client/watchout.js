// start slingin' some d3 here.
// var svg = document.createElementNS, "svg"

var currentScore = 0;
var collisions = 0;
var highScore = 0;

// our dragging function
var isCollide = function isCollide(a, b) {
    return !(
        ((a.y + a.height) < (b.y)) ||
        (a.y > (b.y + b.height)) ||
        ((a.x + a.width) < b.x) ||
        (a.x > (b.x + b.width))
    );
}

var drag = d3.behavior.drag()
          .on ( 'dragstart', function(){player.style('fill', 'black'); })
          .on ('drag', function() {player.attr('cx', d3.event.x)
                                         .attr('cy', d3.event.y); })
          .on ('dragend', function(){player.style('fill', 'black'); });

d3.select('svg').selectAll('circle')
  .data([1000,1550,2500])
  .enter()
  .append('circle')
  .attr('cy', function (d) {
    return d
  });

d3.select('svg').selectAll('circle')
  .data([1000,1550,2500])
  .attr('cx', function (d) {
    return d
  });

d3.selectAll('circle')
  .data(['black', 'red', 'red'])  
  .style('fill', function (d) {
    return d
  });

d3.select('svg').selectAll('circle')
  .data([20,20,20])
  .attr('r', function (d) {
    return d
  });

d3.selectAll('circle')
  .classed("enemies", true); 

var player = d3.select('svg').select('circle')  
  .classed("enemies", false)
  .classed("player", true)
  .call(drag);



// Grab a random sample of letters from the alphabet, in alphabetical order.
var randomNum = function () { return Math.random() * 60;}
// setInterval(function() {
//   d3.selectAll('circle')
//       .data([randomNum(), randomNum(), randomNum()])    
//       .transition().duration(500)
//       .attr("cx",function (d) {
//         return d
//       });
 
// }, 1000);


var $highScore = $(".high > span");
var $currentScore = $(".current > span");
var $collisions = $(".collisions > span");

console.log($highScore.text());



setInterval(function() {
  d3.selectAll('.enemies')
      .data([randomNum(), randomNum(), randomNum()])    
      .transition().duration(1000)
      .attr("cx",function (d) {
        return d * randomNum()
      })
      .attr("cy",function (d) {
        return d * randomNum()
      });
 
}, 1000);

var allenemies = d3.select('svg').selectAll('.enemies');
setInterval(function(){

  for (var i = 0; i < allenemies[0].length; i++) {
    if((Math.abs(allenemies[0][i].cx.animVal.value - player[0][0].cx.animVal.value) <= 50 )&&
    (Math.abs(allenemies[0][i].cy.animVal.value - player[0][0].cy.animVal.value) <= 50)) {
    //  console.log('HIT');
      collisions++;
      $collisions.text(collisions);
      currentScore = 0;
      // $currentScore.text(currentScore);

    }
    // console.log("\n");
  };
}, 500);
// d3.selectAll('circle')    
//     .transition().duration(500)
//     .attr("cx",520);
setInterval(function(){
  currentScore++; 
  $currentScore.text(currentScore);
  //console.log(currentScore, collisions, highScore);
  if(currentScore > highScore){
     highScore = currentScore;
     $highScore.text(currentScore);
  }
}, 250);
//       <div class="high">High score: <span>0</span></div>
//       <div class="current">Current score: <span>0</span></div>
//       <div class="collisions">Collisions: <span>0</span></div>



















