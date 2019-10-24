// const square = function (x) {
//     return x * x;
// }

// const square = (x) => {
//     return x * x;
// }

// const square = (x) => x * x;

const event = {
    name: 'Birthday Party',
    guestList: ["andrew", "sangmin", "Jen"],
    printGuestList() {
        console.log('guest list for ' + this.name);

        this.guestList.forEach((guest) => {
            console.log(guest + " is attending " + this.name)
        })
    }
}

console.log(event.printGuestList());