// Resizable

(function() {
var d3 = Plotly.d3;

var WIDTH_IN_PERCENT_OF_PARENT = 60,
    HEIGHT_IN_PERCENT_OF_PARENT = 80;

var gd3 = d3.select('body')
    .append('div')
    .style({
        width: WIDTH_IN_PERCENT_OF_PARENT + '%',
        'margin-left': (100 - WIDTH_IN_PERCENT_OF_PARENT) / 2 + '%',

        height: HEIGHT_IN_PERCENT_OF_PARENT + 'vh',
        'margin-top': (100 - HEIGHT_IN_PERCENT_OF_PARENT) / 2 + 'vh'
    });

var gd = gd3.node();

var steamedFrameTrace1 = {
  x: ['Salt', 'Fat', 'Calories', 'Sugar'],
  y: [5, 6, 7, 8],
  type: 'scatter',
  name: 'Har Gao',
  line: {color:'red'}
};

var steamedFrameTrace2 = {
  x: ['Salt', 'Fat', 'Calories', 'Sugar'],
  y: [6, 10, 2, 1],
  type: 'scatter',
  name: 'Siu Mai',
  line: {color:'purple'}
};

//Fried
var friedFrameTrace1 = {
  x: ['Salt', 'Fat', 'Calories', 'Sugar'],
  y: [8, 8, 7, 8],
  type: 'scatter',
  name: 'Spring Roll',
  line: {color:'red'}
};

var friedFrameTrace2 = {
  x: ['Salt', 'Fat', 'Calories', 'Sugar'],
  y: [10, 10, 2, 10],
  type: 'scatter',
  name: 'Prawn Cracker',
  line: {color:'purple'}
};

//Baked
var bakedFrameTrace1 = {
  x: ['Salt', 'Fat', 'Calories', 'Sugar'],
  y: [6, 6, 8, 8],
  type: 'scatter',
  name: 'Bo Lo Bao',
  line: {color:'red'}
};

var bakedFrameTrace2 = {
  x: ['Salt', 'Fat', 'Calories', 'Sugar'],
  y: [8, 10, 9, 3],
  type: 'scatter',
  name: 'Char Siu So',
  line: {color:'purple'}
};

var frames = [
  {name: 'steamed', data: [steamedFrameTrace1,steamedFrameTrace2]},
  {name: 'fried', data: [friedFrameTrace1,friedFrameTrace2]},
  {name: 'baked', data: [bakedFrameTrace1,bakedFrameTrace2]},
];

// Initialised with the steamed traces

var data = [
  {
    x: frames[0].data[0].x,
    y: frames[0].data[0].y,
    name: frames[0].data[0].name,
    line: {simplify: false, color:frames[0].data[0].line.color},
  },
  {
    x: frames[0].data[1].x,
    y: frames[0].data[1].y,
    name: frames[0].data[1].name,
    line: {simplify: false, color:frames[0].data[1].line.color},
  }
]

var layout = {
    title: 'Dim Sum for Health Nuts',
    xaxis: {title: 'Categories', showgrid: false, zeroline: false},
    yaxis: {title: '/100g Serving', showline: false},
    updatemenus: [{
      buttons: [
        {method: 'animate', args: [['steamed']], label: 'Steamed'},
        {method: 'animate', args: [['fried']], label: 'Fried'},
        {method: 'animate', args: [['baked']], label: 'Baked'}
      ]
    }]
  }

Plotly.plot(gd, data, layout).then(function() {
  Plotly.addFrames(gd, frames);
});

window.onresize = function() {
    Plotly.Plots.resize(gd);
};

})();
