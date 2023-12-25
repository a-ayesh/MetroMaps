class RouteNode {
  constructor(coordinates, name) {
    this.coordinates = coordinates;
    this.name = name;
    this.next = null;
    this.prev = null;
  }
}

class Route {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  // Append new stop
  append(coordinates, name) {
    const node = new RouteNode(coordinates, name);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;
  }

  // Convert list to array
  toArray() {
    const arr = [];
    let current = this.head;

    while (current) {
      arr.push([current.coordinates, current.name]);
      current = current.next;
    }

    return arr;
  }

  // Check if list is empty
  isEmpty() {
    return this.length === 0;
  }

  // Get the size of the list
  size() {
    return this.length;
  }

  // Get the this.head
  getHead() {
    return this.head;
  }

  // Get the this.tail
  getTail() {
    return this.tail;
  }

  // Method to iterate over the LinkedList
  iterator() {
    let currentNode = this.getHead();
    if (currentNode === null) return -1;

    const iterate = function* () {
      while (currentNode) {
        yield currentNode;
        currentNode = currentNode.next;
      }
    };
    return iterate();
  }

  // Method to log the LinkedList, for debugging
  // it' a circular structure, so can't use stringify to debug the whole structure
  log() {
    let currentNode = this.getHead();
    while (currentNode) {
      console.log(
        "Coordinates: ",
        currentNode.coordinates,
        "\nName: ",
        currentNode.name
      );
      currentNode = currentNode.next;
    }
  }
}

// Example

// const newDoubleLinkedList = new Route()
// newDoubleLinkedList.append(1)
// newDoubleLinkedList.append(2)
// newDoubleLinkedList.size() // returns 2
// const iterate = newDoubleLinkedList.iterator()
// console.log(iterate.next().value) // 1
// console.log(iterate.next().value) // 2
// console.log(newDoubleLinkedList.log())

// export { Route }