function loadMapIcons(map) {
  map.loadImage("images/geo-red.png", function (error, image) {
    if (error) throw error;
    map.addImage("geo-red", image);
  });
  map.loadImage("images/geo-orange.png", function (error, image) {
    if (error) throw error;
    map.addImage("geo-orange", image);
  });
  map.loadImage("images/geo-black.png", function (error, image) {
    if (error) throw error;
    map.addImage("geo-black", image);
  });
  map.loadImage("images/geo-blue.png", function (error, image) {
    if (error) throw error;
    map.addImage("geo-blue", image);
  });
  map.loadImage("images/geo-green.png", function (error, image) {
    if (error) throw error;
    map.addImage("geo-green", image);
  });
}

export default loadMapIcons;
