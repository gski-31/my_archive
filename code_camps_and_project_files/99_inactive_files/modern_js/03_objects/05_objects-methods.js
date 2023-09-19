const restaurant = {
        name: 'chronic',
        capacity: 88,
        guests: 0,
        seatParty(partySize) {
                this.guests += partySize;
        },
        removeParty(partySize) {
                this.guests -= partySize;
        },
        checkSpace(partySize) {
                const seatsLeft = this.capacity - this.guests;
                return partySize <= seatsLeft;
        },
};

/* CHALLENGE:
// seat party
// remove party
*/

restaurant.seatParty(88);
restaurant.checkSpace(56);
restaurant.removeParty(72);
restaurant.checkSpace(56);
