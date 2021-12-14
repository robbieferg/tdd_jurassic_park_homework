const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaurs = [];
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let dinosaur4;

  this.beforeEach(function () {
    dinosaur1 = new Dinosaur("T. Rex", "Carnivore", 1500);
    dinosaur2 = new Dinosaur("Brontosaurus", "Herbivore", 800);
    dinosaur3 = new Dinosaur("Oviraptor", "Omnivore", 300);
    dinosaur4 = new Dinosaur("Pterodactyl", "Carnivore", 650);
    dinosaur5 = new Dinosaur("T. Rex", "Carnivore", 1200);
    dinosaur6 = new Dinosaur("Brachiosaurus", "Herbivore", 250);
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

  it('should be able to add a dinosaur to its collection', function() {
    park.addDinosaur(dinosaur4);
    const actual = dinosaurs.includes(dinosaur4);
    assert.deepStrictEqual(actual, true);
  });

  it('should be able to remove a dinosaur from its collection', function() {
    park.removeDinosaur(dinosaur3);
    const actual = dinosaurs.includes(dinosaur3);
    assert.deepStrictEqual(actual, false);
  });
    

  it('should be able to find the dinosaur that attracts the most visitors', function() {
    const actual = park.findMostPopularDinosaur();
    assert.deepStrictEqual(actual, dinosaur1);
  });

  it('should be able to find all dinosaurs of a particular species', function() {
    park.addDinosaur(dinosaur5);
    const dinosaursBySpecies = park.findDinosaursBySpecies("T. Rex");
    const actual = dinosaursBySpecies.includes(dinosaur1) && dinosaursBySpecies.includes(dinosaur5);
    assert.deepStrictEqual(actual, true);
  });

  it('should be able to calculate the total number of visitors per day', function() {
    actual = park.getVisitorsPerDay();
    assert.strictEqual(actual, 2600);
  });

  it('should be able to calculate the total number of visitors per year', function() {
    actual = park.getVisitorsPerYear();
    assert.strictEqual(actual, 949000);
  });

  it('should be able to calculate total revenue for one year', function() {
    actual = park.getRevenuePerYear();
    assert.strictEqual(actual, 16607500)
  });

  it('should be able to remove all dinosaurs of a particular species', function() {
    park.addDinosaur(dinosaur5);
    park.removeDinosaursBySpecies("T. Rex");
    const actual = park.dinosaurs.includes(dinosaur1) || park.dinosaurs.includes(dinosaur5);
    assert.strictEqual(actual, false);
  });

  it("should be able to provide object containing number of dinosaurs for each diet type", function() {
    park.addDinosaur(dinosaur4);
    park.addDinosaur(dinosaur5);
    park.addDinosaur(dinosaur6);
    diets = park.getDietCounts();
    actual = diets.carnivore === 3 && diets.herbivore === 2 && diets.omnivore === 1;
    assert.strictEqual(actual, true);
  })

});
