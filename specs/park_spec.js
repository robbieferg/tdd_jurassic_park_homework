const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaurs = [];
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;

  this.beforeEach(function () {
    dinosaur1 = new Dinosaur("T. Rex", "Carnivore", 1500);
    dinosaur2 = new Dinosaur("Brontosaurus", "Herbivore", 800);
    dinosaur3 = new Dinosaur("Oviraptor", "Omnivore", 300);
    dinosaurs = [dinosaur1, dinosaur2, dinosaur3];
    park = new Park("Jurassic Park", 17.50, dinosaurs);
  })

  it('should have a name', function() {
    const actual = park.name;
    assert.strictEqual(actual, "Jurassic Park");
  });

  it('should have a ticket price', function() {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 17.50);
  });
    

  it('should have a collection of dinosaurs', function() {
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, dinosaurs)
  });

  it('should be able to add a dinosaur to its collection');

  it('should be able to remove a dinosaur from its collection');

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
