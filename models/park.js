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

module.exports = Park;