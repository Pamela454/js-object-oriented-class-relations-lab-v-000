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
    return this.trips().map(trip => {
      return trip.passenger();
    });
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
          }
        );
    
  }
  
  drivers() {
    return this.trips().map(trip => {
      return trip.driver();
    });
  }
}

class Trip {
  this.driverId = driver.id;
    this.passengerId = passenger.id;
    this.id = tripId++;
    store.trips.push(this);
  }
}


