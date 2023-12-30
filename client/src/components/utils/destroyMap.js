function destroyMap(map) {
  if (map.current) {
    map.current.remove();
  }
}

export default destroyMap;