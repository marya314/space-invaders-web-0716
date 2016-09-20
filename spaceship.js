class Spaceship {

    constructor(name, crew, phasers, shields) {
        this.name = name;
        this.phasers = phasers;
        this.shields = shields;
        this.cloaked = false;
        this.warpDrive = "disengaged";
        this.phasersCharge = "uncharged";
        if (crew.length == 0) {
            this.docked = true;
        } else {
            this.docked = false;
        }
        crew.forEach((crewMember) => {
            crewMember.currentShip = this
        })
    }
}


// in ES5:
// function Spaceship(name, crewArr, phasers, shields) {
//     this.name = name
//     this.phasers = phasers
//     this.shields = shields
//     this.cloaked = false
//     this.phasersCharge = "uncharged"
//     this.warpDrive = "disengaged";
//     if (!!crewArr.length) { [<-or can do]
//         this.docked == false;
//         }
//         var self = this <- [can do]
//     crew.forEach(function(crewMember) {
//             crewMember.currentShip = this
//         }.bind.this)) <- [can also do this which references our whole spaceship object]
// }
//
// Note: our classes know about each other through root.js and tests
