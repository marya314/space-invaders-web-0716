class CrewMember {

    constructor (position) {
    this.position = position
    this.currentShip = "Looking for a Rig"
    }

    engageWarpDrive(){
        if (this.position === "Pilot" && this.currentShip !== "Looking for a Rig") {
            this.currentShip.warpDrive = "engaged!"
        } else {
        return 'had no effect'
        }
    }

    setsInvisibility(){
        if (this.position === "Defender" && this.currentShip !== "Looking for a Rig") {
            this.currentShip.cloaked = true
        } else {
        return 'had no effect'
        }
    }

    chargePhasers(){
        if (this.position === "Gunner" && this.currentShip !== "Looking for a Rig") {
            this.currentShip.phasersCharge = "charged!"
        } else {
        return 'had no effect'
        }
    }
}



// .engageWarpDrive, etc are functions - can tell from tests because of parenthesis - trying to call on something
//
//
// //in ES5:
// function CrewMember(){
//     this.position = position
//     this.currentShip = "Looking for a Rig"
// }
//
// CrewMember.prototype.engageWarpDrive = function() {
//     return 'had no effect'
// }
//
// CrewMember.prototype.setsInvisibility = function() {
//     return 'had no effect'
// }
//
// CrewMember.prototype.chargePhasers = function() {
//     return 'had no effect'
// }
//
// //in Ruby:
// class CrewMember
// attr_accessor :position
//
// def initialize(position)
//     @position = position
// end
