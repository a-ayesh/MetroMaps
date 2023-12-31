/**
 * Removes the map from the DOM.
 *
 * @param {Object} map - The map object.
 */
function destroyMap(map) {
  if (map.current) {
    map.current.remove();
  }
}

export default destroyMap;