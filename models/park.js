const Park = function (name, ticketPrice, dinosaurs) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = dinosaurs;
}

Park.prototype.addDinosaur = function(dinosaur) {
    this.dinosaurs.push(dinosaur);
}

Park.prototype.removeDinosaur = function(dinosaur) {
    const index = this.dinosaurs.indexOf(dinosaur);
    this.dinosaurs.splice(index, 1);
}

Park.prototype.findMostPopularDinosaur = function() {
    let highestNumber = 0
    let mostPopularDinosaur
    for (dinosaur of this.dinosaurs) {
        if (dinosaur.guestsAttractedPerDay > highestNumber) {
            highestNumber = dinosaur.guestsAttractedPerDay;
        }
    }
    for (dinosaur of this.dinosaurs) {
        if (dinosaur.guestsAttractedPerDay == highestNumber) {
            mostPopularDinosaur = dinosaur;
        }
    }
    return mostPopularDinosaur;
}

Park.prototype.findDinosaursBySpecies = function(species) {
    let dinosaursOfSpecies = [];
    for (dinosaur of this.dinosaurs) {
        if (dinosaur.species === species) {
            dinosaursOfSpecies.push(dinosaur);
        }
    }
    return dinosaursOfSpecies;
}

Park.prototype.getVisitorsPerDay = function() {
    let visitorsPerDay = 0;
    for (dinosaur of this.dinosaurs) {
        visitorsPerDay += dinosaur.guestsAttractedPerDay;
    }
    return visitorsPerDay;
}

Park.prototype.getVisitorsPerYear = function() {
    let visitorsPerYear;
    visitorsPerDay = this.getVisitorsPerDay();
    visitorsPerYear = visitorsPerDay * 365;
    return visitorsPerYear;
}

Park.prototype.getRevenuePerYear = function() {
    let revenuePerYear;
    visitorsPerYear = this.getVisitorsPerYear();
    revenuePerYear = visitorsPerYear * this.ticketPrice;
    return revenuePerYear;
}

Park.prototype.removeDinosaursBySpecies = function(species) {
    
    for (var i=0; i < this.dinosaurs.length; i++) {
        if (this.dinosaurs[i].species === species) {
            this.dinosaurs.splice(i, 1);
        }
    }
    
}

Park.prototype.getDietCounts = function() {
    
    let carnivoreCount = 0;
    for (var i=0; i < this.dinosaurs.length; i++) {
        if (this.dinosaurs[i].diet === "Carnivore") {
            carnivoreCount += 1;
        }
    }
    

    let herbivoreCount = 0;
    for (var i=0; i < this.dinosaurs.length; i++) {
        if (this.dinosaurs[i].diet === "Herbivore") {
            herbivoreCount += 1;
        }
    }
    

    let omnivoreCount = 0;
    for (var i=0; i < this.dinosaurs.length; i++) {
        if (this.dinosaurs[i].diet === "Omnivore") {
            omnivoreCount += 1;
        }
    }
    
    let diets = {
        carnivore: carnivoreCount,
        herbivore: herbivoreCount,
        omnivore: omnivoreCount
    }

    return diets;
}

module.exports = Park;