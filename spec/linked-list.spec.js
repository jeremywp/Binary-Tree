let LinkedList = require('../src/linked-list');

describe('LinkedList', () => {
  let linkedList;

  beforeEach(() => {
    linkedList = new LinkedList();
  });

  describe('insert', () => {
    it('should insert data correctly', () => {
      let mario = { name: 'Mario', number: '801-456-7890' };
      linkedList.insert(mario);
      expect(linkedList.contains('Mario')).toEqual(mario);
    });
    it('should insert two data elements correctly', () => {
      let mario = { name: 'Mario', number: '801-456-7890' };
      let luigi = { name: 'Luigi', number: '801-234-5678' };
      linkedList.insert(mario);
      linkedList.insert(luigi);
      expect(linkedList.contains('Mario')).toEqual(mario);
      expect(linkedList.contains('Luigi')).toEqual(luigi);
    });
    it('should sort elements as it inserts them', () => {
      let mario = { name: 'Mario', number: '801-456-7890' };
      let luigi = { name: 'Luigi', number: '801-234-5678' };
      let peach = { name: 'Peach', number: '801-456-7890' };
      let toad = { name: 'Toad', number: '801-234-5678' };
      let kong = { name: 'Kong', number: '801-456-7890' };
      let bowser = { name: 'Bowser', number: '801-234-5678' };
      linkedList.insert(mario);
      linkedList.insert(luigi);
      linkedList.insert(peach);
      linkedList.insert(toad);
      linkedList.insert(kong);
      linkedList.insert(bowser);
      expect(linkedList.toString()).toEqual(
        '{Bowser} -> {Kong} -> {Luigi} -> {Mario} -> {Peach} -> {Toad} -> null'
      );
    });
  });

  describe('contains', () => {
    it('should find an element at the front of the list correctly', () => {
      let mario = { name: 'Mario', number: '801-456-7890' };
      let luigi = { name: 'Luigi', number: '801-234-5678' };
      linkedList.insert(mario);
      linkedList.insert(luigi);
      expect(linkedList.contains('Mario')).toEqual(mario);
    });
    it('should find an element at the end of the list correctly', () => {
      let mario = { name: 'Mario', number: '801-456-7890' };
      let luigi = { name: 'Luigi', number: '801-234-5678' };
      let peach = { name: 'Peach', number: '801-123-3456' };
      linkedList.insert(mario);
      linkedList.insert(luigi);
      linkedList.insert(peach);
      expect(linkedList.contains('Peach')).toEqual(peach);
    });
  });

  describe('remove', () => {
    it('should remove an element at the front of the list correctly', () => {
      let mario = { name: 'Mario', number: '801-456-7890' };
      let luigi = { name: 'Luigi', number: '801-234-5678' };
      linkedList.insert(mario);
      linkedList.insert(luigi);
      linkedList.remove('Mario');
      expect(linkedList.contains('Mario')).toBeFalsy();
      expect(linkedList.contains('Luigi')).toBeTruthy();
    });
    it('should revome an element at the end of the list correctly', () => {
      let mario = { name: 'Mario', number: '801-456-7890' };
      let luigi = { name: 'Luigi', number: '801-234-5678' };
      let peach = { name: 'Peach', number: '801-123-3456' };
      linkedList.insert(mario);
      linkedList.insert(luigi);
      linkedList.insert(peach);
      linkedList.remove('Peach');
      expect(linkedList.contains('Peach')).toBeFalsy();
      expect(linkedList.contains('Mario')).toBeTruthy();
      expect(linkedList.contains('Luigi')).toBeTruthy();
    });
    it('should change the size of the list correctly', () => {
      let mario = { name: 'Mario', number: '801-456-7890' };
      let luigi = { name: 'Luigi', number: '801-234-5678' };
      let peach = { name: 'Peach', number: '801-123-3456' };
      linkedList.insert(mario);
      linkedList.insert(luigi);
      linkedList.insert(peach);
      expect(linkedList.size).toEqual(3);
      linkedList.remove('Peach');
      expect(linkedList.size).toEqual(2);
    });
  });

  describe('size', () => {
    it('should determine the size of the list correctly', () => {
      let mario = { name: 'Mario', number: '801-456-7890' };
      let luigi = { name: 'Luigi', number: '801-234-5678' };
      let peach = { name: 'Peach', number: '801-123-3456' };
      linkedList.insert(mario);
      linkedList.insert(luigi);
      linkedList.insert(peach);
      expect(linkedList.size).toEqual(3);
      linkedList.remove('Peach');
      expect(linkedList.size).toEqual(2);
    });
    it('should determine the size of the list correctly when list is empty', () => {
      expect(linkedList.size).toEqual(0);
    });
  });

  describe('toString', () => {
    it('should return a string of the list correctly', () => {
      let mario = { name: 'Mario', number: '801-456-7890' };
      let luigi = { name: 'Luigi', number: '801-234-5678' };
      let peach = { name: 'Peach', number: '801-123-3456' };
      linkedList.insert(mario);
      linkedList.insert(luigi);
      linkedList.insert(peach);
      expect(linkedList.toString()).toEqual(
        '{Luigi} -> {Mario} -> {Peach} -> null'
      );
      linkedList.remove('Mario');
      expect(linkedList.toString()).toEqual('{Luigi} -> {Peach} -> null');
    });
  });
});
