var view;
var map;
var intialLocation;
var london;

function init(){
  initialLocation = ol.proj.fromLonat([41.043316, 28.862457])
  london = ol.proj.fromLonat([-0.12755, 51.507222]);

  view = new ol.View({
    center: intialLocation,
    zoom: 6
  });

  map = new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    loadTilesWhileAnimating: true,
    view: view
  });
}

function panHome() {
  view.animate({
    center: london,
    duration: 2000
  });
}

window.onload = intl;
