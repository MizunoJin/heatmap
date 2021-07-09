"use strict";

// [pageX / window.innerWidth, pageY / window.innerHeight] の値を入れる
const PercentOfCoordinates = [
  [0.2607421875, 0.1369150779896014],
  [0.40234375, 0.22530329289428075],
  [0.46484375, 0.2582322357019064],
  [0.4638671875, 0.31542461005199307],
  [0.3125, 0.3951473136915078],
  [0.2802734375, 0.36915077989601386],
  [0.2734375, 0.2738301559792028],
  [0.326171875, 0.2270363951473137],
  [0.4931640625, 0.30329289428076256],
  [0.5576171875, 0.3986135181975737],
  [0.599609375, 0.43847487001733104],
  [0.65625, 0.5511265164644714],
  [0.4912109375, 0.5944540727902946],
  [0.2978515625, 0.4800693240901213],
  [0.263671875, 0.42980935875216636],
  [0.201171875, 0.38128249566724437],
  [0.1171875, 0.28942807625649913],
  [0.15625, 0.1663778162911612],
  [0.4423828125, 0.2218370883882149],
  [0.6337890625, 0.20623916811091855],
  [0.650390625, 0.28942807625649913],
  [0.56640625, 0.45233968804159447],
  [0.3173828125, 0.5025996533795494],
  [0.3310546875, 0.45233968804159447],
  [0.423828125, 0.389948006932409],
  [0.318359375, 0.18370883882149047],
  [0, 0],
  [0.10546875, 0.6152512998266898],
  [0.130859375, 0.7019064124783362],
  [0.1142578125, 0.7954939341421143],
  [0.1083984375, 0.8405545927209706],
  [0.515625, 0.7989601386481803],
  [0.5546875, 0.733102253032929],
  [0.5419921875, 0.5407279029462738],
  [0.70703125, 0.21143847487001732],
  [0.7177734375, 0.2339688041594454],
  [0.6650390625, 0.1265164644714038],
  [0.6650390625, 0.1265164644714038],
  [0.6650390625, 0.1265164644714038],
  [0.6650390625, 0.1265164644714038],
  [0.662109375, 0.12478336221837089],
  [0.66015625, 0.12305025996533796],
  [0.66015625, 0.12305025996533796],
  [0.6669921875, 0.11611785095320624],
  [0.66796875, 0.12305025996533796],
  [0.6650390625, 0.1265164644714038],
  [0.6630859375, 0.12478336221837089],
  [0.6630859375, 0.11265164644714037],
  [0.666015625, 0.11611785095320624],
  [0.6689453125, 0.13344887348353554],
  [0.666015625, 0.13344887348353554],
  [0.6650390625, 0.1265164644714038],
  [0.6640625, 0.12998266897746968],
  [0.6591796875, 0.12305025996533796],
  [0.6591796875, 0.10918544194107452],
  [0.6630859375, 0.12478336221837089],
  [0.6611328125, 0.1265164644714038],
  [0.66015625, 0.12131715771230503],
  [0.6513671875, 0.15424610051993068],
  [0.6572265625, 0.12131715771230503],
  [0.65625, 0.12824956672443674],
  [0.6572265625, 0.12998266897746968],
  [0.654296875, 0.13344887348353554],
  [0.654296875, 0.1317157712305026],
  [0.66015625, 0.1265164644714038],
  [0.6611328125, 0.1265164644714038],
  [0.662109375, 0.12998266897746968],
  [0.662109375, 0.12998266897746968],
  [0.6689453125, 0.1369150779896014],
  [0.66796875, 0.12305025996533796],
  [0.6552734375, 0.11091854419410745],
  [0.556640625, 0.1265164644714038],
  [0.3837890625, 0.1438474870017331],
  [0.375, 0.1265164644714038],
  [0.3955078125, 0.11265164644714037],
  [0.46484375, 0.20797227036395147],
  [0.3310546875, 0.5181975736568457],
  [0.20703125, 0.512998266897747],
  [0.1640625, 0.3379549393414211],
  [0.359375, 0.31369150779896016],
  [0.619140625, 0.2564991334488735],
  [0.55859375, 0.1559792027729636],
  [0.4375, 0.18197573656845753],
  [0.3046875, 0.4679376083188908],
  [0.283203125, 0.5979202772963604],
  [0.09765625, 0.7608318890814558],
  [0.115234375, 0.7625649913344887],
];

// x, y座標の値に戻す
const coordinates = [];
for (let [x, y] of PercentOfCoordinates) {
  coordinates.push([x * window.innerWidth, y * window.innerHeight]);
}

const radius1 = 1;
const radius2 = innerWidth / 110;
const canvas = document.getElementById("c");
const heatMap = document.getElementById("heatmap");
const wt = heatMap.clientWidth;
const ht = heatMap.clientHeight;
canvas.width = wt;
canvas.height = ht;
const ctx = canvas.getContext("2d");

// this handler is listening to the click event of the user
const createHeatMap = function (coordinates) {
  // get the x and y values of the user's click position
  for (let [x, y] of coordinates) {
    // create a radial gradient with the defined parameters. we want to draw an alphamap
    let rgr = ctx.createRadialGradient(x, y, radius1, x, y, radius2);
    // the center of the radial gradient has .1 alpha value
    rgr.addColorStop(0, "rgba(0,0,0,0.5)");
    // and it fades out to 0
    rgr.addColorStop(1, "rgba(0,0,0,0)");
    // drawing the gradient
    ctx.fillStyle = rgr;
    ctx.fillRect(x - radius2, y - radius2, 2 * radius2, 2 * radius2);
    // at least colorize the area
    colorize(x, y);
  }
};

createHeatMap(coordinates);

// function for coloring the heatmap
function colorize(x, y) {
  // get the image data for the click area
  let image = ctx.getImageData(
      x - radius2,
      y - radius2,
      2 * radius2,
      2 * radius2
    ),
    // some performance tweaks
    imageData = image.data,
    length = imageData.length;
  // loop thru the area
  for (let i = 3; i < length; i += 4) {
    let r = 0,
      g = 0,
      b = 0,
      tmp = 0,
      // &#91;0&#93; -> r, [1] -> g, [2] -> b, [3] -> alpha
      alpha = imageData[i];
    // coloring depending on the current alpha value
    if (alpha <= 255 && alpha >= 235) {
      tmp = 255 - alpha;
      r = 255 - tmp;
      g = tmp * 12;
    } else if (alpha <= 234 && alpha >= 200) {
      tmp = 234 - alpha;
      r = 255 - tmp * 8;
      g = 255;
    } else if (alpha <= 199 && alpha >= 150) {
      tmp = 199 - alpha;
      g = 255;
      b = tmp * 5;
    } else if (alpha <= 149 && alpha >= 100) {
      tmp = 149 - alpha;
      g = 255 - tmp * 5;
      b = 255;
    } else b = 255;
    // we ve started with i=3
    // set the new r, g and b values
    imageData[i - 3] = r;
    imageData[i - 2] = g;
    imageData[i - 1] = b;
  }
  // the rgb data manipulation didn't affect the ImageData object(defined on the top)
  // after the manipulation process we have to set the manipulated data to the ImageData object
  ctx.putImageData(image, x - radius2, y - radius2);
}
