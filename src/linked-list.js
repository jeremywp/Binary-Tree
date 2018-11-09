class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  insert(element) {
    let newNode = new LinkedListNode(element);
    if (this.head == null) {
      this.head = newNode;
      this.size++;
    } else {
      if (newNode.data.name < this.head.data.name) {
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
      } else {
        let previousNode = this.head;
        let currentNode = this.head.next;
        while (currentNode != null) {
          if (newNode.data.name > currentNode.data.name) {
            previousNode = currentNode;
            currentNode = currentNode.next;
          } else if (newNode.data.name < currentNode.data.name) {
            previousNode.next = newNode;
            newNode.next = currentNode;
            this.size++;
          } else {
            return;
          }
        }
        previousNode.next = newNode;
        this.size++;
      }
    }
  }

  contains(string) {
    let currentNode = this.head;

    while (currentNode != null) {
      if (currentNode.data.name == string) {
        return currentNode.data;
      } else {
        currentNode = currentNode.next;
      }
    }
  }

  remove(string) {
    if (this.head != null) {
      if (this.head.data.name == string) {
        let tempNode = this.head;
        this.head = this.head.next;
        tempNode.next = null;
        this.length--;
      } else {
        let previousNode = this.head;
        let currentNode = previousNode.next;
        while (currentNode != null) {
          if (currentNode.data.name == string) {
            previousNode.next = currentNode.next;
            currentNode.next = null;
            this.length--;
            return;
          } else {
            previousNode = currentNode;
            currentNode = currentNode.next;
          }
        }
      }
    }
  }

  toString() {
    let currentNode = this.head;
    let listString = '';

    while (currentNode != null) {
      listString += `{${currentNode.data.name}} -> `;
      currentNode = currentNode.next;
    }

    return listString + 'null';
  }

  get size() {
    return this.length;
  }

  set size(size) {
    this.length = size;
  }
}

class LinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
  setNext(node) {
    this.next = node;
  }
}

module.exports = LinkedList;
