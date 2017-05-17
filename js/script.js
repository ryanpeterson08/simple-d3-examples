$(document).ready(function(){

  var dataset = [25, 7, 5, 26, 11, 8, 25, 14, 23, 19];
  var scatterPlot = [
                [5, 20], [480, 90], [250, 50], [100, 33], [330, 95],
                [410, 12], [475, 44], [25, 67], [85, 21], [220, 88]
              ];

  var w1 = 500;
  var h1 = 100;
  var barPadding = 1;

  var w2 = 650;
  var h2 = 75;

  var svgBar = d3.select("body")
                 .append("svg")
                 .attr("width", w1)
                 .attr("height", h1)

  svgBar.selectAll("rect")
        .data(dataset)
        .enter()
        .append("rect")
        .attr("x", function(d, i){
          return i * (w1 / dataset.length);
        })
        .attr("y", function(d){
          return h1 - (d * 4);
        })
        .attr("width", w1 / dataset.length - barPadding)
        .attr("height", function(d){
          return d * 4;
        })
        .attr("fill", function(d){
          return "rgb(0, 0, " + (d * 10)+ ")";
        });

  svgBar.selectAll("text")
     .data(dataset)
     .enter()
     .append("text")
     .text(function(d){
       return d;
     })
     .attr("x", function(d, i){
       return i * (w1 / dataset.length) + (w1 / dataset.length - barPadding) / 2;
     })
     .attr("y", function(d){
       return h1 - (d * 4) + 14;
     })
     .attr("font-family", "sans-serif")
     .attr("font-size", "11px")
     .attr("fill", "white")
     .attr("text-anchor", "middle");

  var svgCircle = d3.select("body")
                    .append("svg")
                    .attr("width", w2)
                    .attr("height", h2);

  var circles = svgCircle.selectAll("circle")
                    .data(dataset)
                    .enter()
                    .append("circle")

  circles.attr("cx", function(d, i){
            return (i * 50) + 25;
          })
          .attr("cy", h2/2)
          .attr("r", function(d){
            return d;
          })
          .attr("fill", "yellow")
          .attr("stroke", "orange")
          .attr("stroke-width", function(d){
            return d/2;
          });

  var svgScatter = d3.select("body")
                     .append("svg")
                     .attr("width", w2)
                     .attr("height", h2);

  svgScatter.selectAll("circle")
            .data(scatterPlot)
            .enter()
            .append("circle")
            .attr("cx", function(d){
              return d[0];
            })
            .attr("cy", function(d){
              return d[1];
            })
            .attr("r", function(d){
              return Math.sqrt(h2 - d[1]);
            });

  svgScatter.selectAll("text")
            .data(scatterPlot)
            .enter()
            .append("text")
            .text(function(d){
              return d[0] + "," + d[1];
            })
            .attr("x", function(d){
              return d[0];
            })
            .attr("y", function(d){
              return d[1];
            })
            .attr("font-family", "sans-serif")
            .attr("font-size", "11px")
            .attr("fill", "red");




});
