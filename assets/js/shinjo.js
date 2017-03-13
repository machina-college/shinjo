
function onMapLoad() {

  var designLink0 = "HTML5 template by <a href='https://github.com/pozh/Magister/' target='_blank'>Magister</a>, ";
  var designLink1 = "under <a href='https://creativecommons.org/licenses/by/3.0/deed.ja' target='_blank'>CC BY 3.0.</a>"
  var tileLink    = "| Maptiles by <a href='http://mierune.co.jp/' target='_blank'>MIERUNE</a>, under CC BY. ";
  var dataLink    = "| Data by <a href='http://osm.org/copyright' target='_blank'>OpenStreetMap</a> contributors, under ODbL.";

  var mapLink  = designLink0 + designLink1 + tileLink + dataLink;

  var map = L.map('map', {zoomControl: false}).setView([35.587222, 139.629722], 16);
  /*var map = L.map('map').setView([35.587222, 139.629722], 16);*/
  L.tileLayer(
    /*'https://tile.mierune.co.jp/mierune/{z}/{x}/{y}.png',*/
    'https://tile.mierune.co.jp/mierune_mono/{z}/{x}/{y}.png',
    {
        attribution: mapLink,
		maxZoom: 18
  	}
  ).addTo(map);
}
