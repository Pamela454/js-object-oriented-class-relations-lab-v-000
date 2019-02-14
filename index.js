let store = {drivers: []}
let driverId = 0;
class Driver {
  constructor(name) {
    this.id = ++driverId
    this.name = name
     
     //add drivers to the store 
    store.drivers.push(this)
  }
  
  trips() {
     return store.drivers.filter(
            function(item) {
                return item.userId === this.id;
            }.bind(this)
        );
  }
}