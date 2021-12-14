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

module.exports = Park;