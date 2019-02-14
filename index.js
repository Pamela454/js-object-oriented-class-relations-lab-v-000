let store = {drivers: [], passengers: []}
let driverId = 0;
let tripId = 0;

class Driver {
  constructor(name) {
    this.id = ++driverId
    this.name = name
     
     //add drivers to the store 
    store.drivers.push(this)
  }
  
  trips() {
     return store.trips.filter(
            function(trip) {
                return trip.driverId === this.id;
            }.bind(this)
        );
  }
  
  passengers() {
    return store.passengers.filter(
            function(trip) {
                return trip.driverId === this.id;
            }.bind(this)
        );
  }
}


let passengerId = 0;

class Passenger {
  constructor(name) {
    this.id = ++passengerId
    this.name = name
    
    store.passengers.push(this)

  }
  
  trips() { 
    return store.trips.filter(
    function(trip) {
      return trip.passengerId === this.id;
          }.bind(this)
        );
    
  }
  
  drivers() {
     return store.drivers.filter(
            function(driver) {
                return driver.driverId === this.id;
            }.bind(this)
        );
  }
}

class Trip {
  constructor(name) {
    this.name = name
  }
}


