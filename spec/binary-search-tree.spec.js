const BinarySearchTree = require('../src/binary-search-tree');

describe('BinarySearchTree', () => {
  let bst;

  beforeEach(() => {
    bst = new BinarySearchTree();
  });

  describe('insert', () => {
    it('inserts one element correctly', () => {
      let data = { word: 'apple', definition: 'the round fruit of a tree' };
      bst.insert(data);
      expect(bst.find(data.word)).toEqual(data);
    });
    it('inserts two elements correctly', () => {
      let data = {
        word: 'apple',
        definition: 'the round sweet fruit of a tree'
      };
      let data2 = { word: 'jog', definition: 'run at a steady gentle pace' };
      bst.insert(data);
      bst.insert(data2);
      expect(bst.find(data.word)).toEqual(data);
      expect(bst.find(data2.word)).toEqual(data2);
    });
    it('inserts element to the right correctly', () => {
      let data = {
        word: 'apple',
        definition: 'the round sweet fruit of a tree'
      };
      let data2 = { word: 'jog', definition: 'run at a steady gentle pace' };
      bst.insert(data);
      bst.insert(data2);
      expect(bst.find(data.word)).toEqual(data);
      expect(bst.find(data2.word)).toEqual(data2);
    });
    it('inserts element to the left correctly', () => {
      let data = { word: 'jog', definition: 'run at a steady gentle pace' };
      let data2 = {
        word: 'apple',
        definition: 'the round sweet fruit of a tree'
      };
      bst.insert(data);
      bst.insert(data2);
      expect(bst.find(data.word)).toEqual(data);
      expect(bst.find(data2.word)).toEqual(data2);
    });
    it('does not insert an element if the element already exists', () => {
      let data = {
        word: 'apple',
        definition: 'the round sweet fruit of a tree'
      };
      bst.insert(data);
      bst.insert(data);
      expect(bst.find(data.word)).toEqual(data);
      bst.remove(data.word);
      expect(bst.find(data)).toEqual(null);
    });
  });

  describe('find', () => {
    it('finds an element correctly', () => {
      let data = { word: 'apple', definition: 'the round fruit of a tree' };
      bst.insert(data);
      expect(bst.find(data.word)).toEqual(data);
    });
    it('finds element to the right correctly', () => {
      let data = {
        word: 'apple',
        definition: 'the round sweet fruit of a tree'
      };
      let data2 = { word: 'jog', definition: 'run at a steady gentle pace' };
      bst.insert(data);
      bst.insert(data2);
      expect(bst.find(data.word)).toEqual(data);
      expect(bst.find(data2.word)).toEqual(data2);
    });
    it('finds element to the left correctly', () => {
      let data = { word: 'jog', definition: 'run at a steady gentle pace' };
      let data2 = {
        word: 'apple',
        definition: 'the round sweet fruit of a tree'
      };
      bst.insert(data);
      bst.insert(data2);
      expect(bst.find(data.word)).toEqual(data);
      expect(bst.find(data2.word)).toEqual(data2);
    });
    it('finds element that is the head correctly', () => {
      let data = { word: 'jog', definition: 'run at a steady gentle pace' };
      bst.insert(data);
      expect(bst.find(data.word)).toEqual(data);
    });
    it('returns null if the element is not there searching left', () => {
      let data = { word: 'jog', definition: 'run at a steady gentle pace' };
      let data2 = {
        word: 'apple',
        definition: 'the round sweet fruit of a tree'
      };
      let data3 = {
        word: 'port',
        definition: 'harbor where ships load or unload'
      };
      bst.insert(data);
      bst.insert(data2);
      bst.insert(data3);
      expect(bst.find('able')).toEqual(null);
    });
    it('returns null if the element is not there searching right', () => {
      let data = { word: 'jog', definition: 'run at a steady gentle pace' };
      let data2 = {
        word: 'apple',
        definition: 'the round sweet fruit of a tree'
      };
      let data3 = {
        word: 'port',
        definition: 'harbor where ships load or unload'
      };
      bst.insert(data);
      bst.insert(data2);
      bst.insert(data3);
      expect(bst.find('random')).toEqual(null);
    });
  });

  describe('remove', () => {
    it('removes an element to the left correctly', () => {
      let data = { word: 'jog', definition: 'run at a steady gentle pace' };
      let data2 = {
        word: 'apple',
        definition: 'the round sweet fruit of a tree'
      };
      let data3 = {
        word: 'port',
        definition: 'harbor where ships load or unload'
      };
      bst.insert(data);
      bst.insert(data2);
      bst.insert(data3);
      expect(bst.find(data2.word)).toEqual(data2);
      bst.remove(data2.word);
      expect(bst.find(data2.word)).toEqual(null);
    });
    it('removes an element to the right correctly', () => {
      let data = { word: 'jog', definition: 'run at a steady gentle pace' };
      let data2 = {
        word: 'apple',
        definition: 'the round sweet fruit of a tree'
      };
      let data3 = {
        word: 'port',
        definition: 'harbor where ships load or unload'
      };
      bst.insert(data);
      bst.insert(data2);
      bst.insert(data3);
      expect(bst.find(data3.word)).toEqual(data3);
      bst.remove(data3.word);
      expect(bst.find(data3.word)).toEqual(null);
    });
    it('removes an element that is the head correctly', () => {
      let data = { word: 'jog', definition: 'run at a steady gentle pace' };
      let data2 = {
        word: 'apple',
        definition: 'the round sweet fruit of a tree'
      };
      let data3 = {
        word: 'port',
        definition: 'harbor where ships load or unload'
      };
      bst.insert(data);
      bst.insert(data2);
      bst.insert(data3);
      expect(bst.find(data.word)).toEqual(data);
      bst.remove(data.word);
      expect(bst.find(data.word)).toEqual(null);
    });
    it('does not remove other elements when an element is not found searching left', () => {
      let data = { word: 'jog', definition: 'run at a steady gentle pace' };
      let data2 = {
        word: 'apple',
        definition: 'the round sweet fruit of a tree'
      };
      let data3 = {
        word: 'port',
        definition: 'harbor where ships load or unload'
      };
      bst.insert(data);
      bst.insert(data2);
      bst.insert(data3);
      expect(bst.find(data.word)).toEqual(data);
      expect(bst.find(data2.word)).toEqual(data2);
      expect(bst.find(data3.word)).toEqual(data3);
      bst.remove('able');
      expect(bst.find(data.word)).toEqual(data);
      expect(bst.find(data2.word)).toEqual(data2);
      expect(bst.find(data3.word)).toEqual(data3);
    });
    it('does not remove other elements when an element is not found searching right', () => {
      let data = { word: 'jog', definition: 'run at a steady gentle pace' };
      let data2 = {
        word: 'apple',
        definition: 'the round sweet fruit of a tree'
      };
      let data3 = {
        word: 'port',
        definition: 'harbor where ships load or unload'
      };
      bst.insert(data);
      bst.insert(data2);
      bst.insert(data3);
      expect(bst.find(data.word)).toEqual(data);
      expect(bst.find(data2.word)).toEqual(data2);
      expect(bst.find(data3.word)).toEqual(data3);
      bst.remove('random');
      expect(bst.find(data.word)).toEqual(data);
      expect(bst.find(data2.word)).toEqual(data2);
      expect(bst.find(data3.word)).toEqual(data3);
    });
  });

  describe('min', () => {
    it('returns the min element correctly when min is on the left of the head', () => {
      let data = { word: 'jog', definition: 'run at a steady gentle pace' };
      let data2 = {
        word: 'apple',
        definition: 'the round sweet fruit of a tree'
      };
      let data3 = {
        word: 'port',
        definition: 'harbor where ships load or unload'
      };
      bst.insert(data);
      bst.insert(data2);
      bst.insert(data3);
      expect(bst.min()).toEqual(data2);
    });
    it('returns the min element correctly when min is the head', () => {
      let data = {
        word: 'apple',
        definition: 'the round sweet fruit of a tree'
      };
      let data2 = { word: 'jog', definition: 'run at a steady gentle pace' };
      let data3 = {
        word: 'port',
        definition: 'harbor where ships load or unload'
      };
      bst.insert(data);
      bst.insert(data2);
      bst.insert(data3);
      expect(bst.min()).toEqual(data);
    });
  });

  describe('max', () => {
    it('returns the max element correctly when max is on the right of the head', () => {
      let data = { word: 'jog', definition: 'run at a steady gentle pace' };
      let data2 = {
        word: 'apple',
        definition: 'the round sweet fruit of a tree'
      };
      let data3 = {
        word: 'port',
        definition: 'harbor where ships load or unload'
      };
      bst.insert(data);
      bst.insert(data2);
      bst.insert(data3);
      expect(bst.max()).toEqual(data3);
    });
    it('returns the max element correctly when max is the head', () => {
      let data = { word: 'jog', definition: 'run at a steady gentle pace' };
      let data2 = {
        word: 'apple',
        definition: 'the round sweet fruit of a tree'
      };
      bst.insert(data);
      bst.insert(data2);
      expect(bst.max()).toEqual(data);
    });
  });
});
