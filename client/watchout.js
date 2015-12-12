// start slingin' some d3 here.
// var svg = document.createElementNS, "svg"

d3.select('svg').selectAll('circle')
  .data([200,400,700])
  .enter()
  .append('circle')
  .attr('cy', function (d) {
    return d
  });

d3.select('svg').selectAll('circle')
  .data([200,400,700])
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

// Grab a random sample of letters from the alphabet, in alphabetical order.
var randomNum = function () { return Math.random() * 25;}
// setInterval(function() {
//   d3.selectAll('circle')
//       .data([randomNum(), randomNum(), randomNum()])    
//       .transition().duration(500)
//       .attr("cx",function (d) {
//         return d
//       });
 
// }, 1000);
setInterval(function() {
  d3.selectAll('circle')
      .data([randomNum(), randomNum(), randomNum()])    
      .transition().duration(500)
      .attr("cx",function (d) {
        return d * randomNum()
      })
      .attr("cy",function (d) {
        return d * randomNum()
      });
 
}, 1000);

// d3.selectAll('circle')    
//     .transition().duration(500)
//     .attr("cx",520);
