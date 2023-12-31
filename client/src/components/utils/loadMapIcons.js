/**
 * Loads map icons for a given map object.
 * The icons are loaded from image files and added to the map as images.
 * The method expects the map object to have a `loadImage` method and an `addImage` method.
 * 
 * @param {object} map - The map object to load the icons onto.
 * @throws {Error} If there is an error loading or adding an image to the map.
 * @returns {void}
 */
function loadMapIcons(map) {

  // Load and add the red icon
  map.loadImage("images/geo-red.png", function (error, image) {
    if (error) throw error;
    map.addImage("geo-red", image);
  });

  // Load and add the orange icon
  map.loadImage("images/geo-orange.png", function (error, image) {
    if (error) throw error;
    map.addImage("geo-orange", image);
  });

  // Load and add the black icon
  map.loadImage("images/geo-black.png", function (error, image) {
    if (error) throw error;
    map.addImage("geo-black", image);
  });

  // Load and add the blue icon
  map.loadImage("images/geo-blue.png", function (error, image) {
    if (error) throw error;
    map.addImage("geo-blue", image);
  });

  // Load and add the green icon
  map.loadImage("images/geo-green.png", function (error, image) {
    if (error) throw error;
    map.addImage("geo-green", image);
  });

}

export default loadMapIcons;
