// start slingin' some d3 here.
// var svg = document.createElementNS, "svg"


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
          .on ( 'dragstart', function(){player.style('fill', 'red'); })
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
  .data(['red', 'gold', 'green'])  
  .style('fill', function (d) {
    return d
  });

d3.select('svg').selectAll('circle')
  .data([20,40,100])
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
setInterval(function() {
  d3.selectAll('.enemies')
      .data([randomNum(), randomNum(), randomNum()])    
      .transition().duration(500)
      .attr("cx",function (d) {
        return d * randomNum()
      })
      .attr("cy",function (d) {
        return d * randomNum()
      });
 
}, 1000);

var allCircles = d3.select('svg').selectAll('circle');
setInterval(function(){

  for (var i = 0; i < allCircles[0].length; i++) {
    console.log('y',allCircles[0][i].cy.animVal.value);
    // allCircles[0][i]
    console.log('x',allCircles[0][i].cx.animVal.value);
  };
}, 500)
// d3.selectAll('circle')    
//     .transition().duration(500)
//     .attr("cx",520);
